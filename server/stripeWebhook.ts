import type { Express, Request, Response } from "express";
import Stripe from "stripe";

/**
 * Register Stripe webhook endpoint.
 * Must be called BEFORE express.json() middleware to allow raw body parsing.
 */
export function registerStripeWebhook(app: Express) {
  const stripeKey = process.env.STRIPE_SECRET_KEY;
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

  if (!stripeKey) {
    console.warn("[Stripe] STRIPE_SECRET_KEY not set — webhook endpoint disabled");
    return;
  }

  const stripe = new Stripe(stripeKey, { apiVersion: "2025-04-30" as any });

  app.post(
    "/api/stripe/webhook",
    // Use express.raw to get raw body for signature verification
    (req: Request, res: Response, next) => {
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      const expressRaw = require("express").raw({ type: "application/json" });
      expressRaw(req, res, next);
    },
    async (req: Request, res: Response) => {
      const sig = req.headers["stripe-signature"];
      let event: Stripe.Event;

      try {
        if (webhookSecret && sig) {
          event = stripe.webhooks.constructEvent(req.body, sig, webhookSecret);
        } else {
          // No webhook secret — parse JSON directly (dev mode)
          event = JSON.parse(req.body.toString()) as Stripe.Event;
        }
      } catch (err: any) {
        console.error("[Stripe Webhook] Signature verification failed:", err.message);
        return res.status(400).send(`Webhook Error: ${err.message}`);
      }

      // ⚠️ CRITICAL: Handle test events
      if (event.id.startsWith("evt_test_")) {
        console.log("[Stripe Webhook] Test event detected, returning verification response");
        return res.json({ verified: true });
      }

      console.log(`[Stripe Webhook] Event: ${event.type} | ID: ${event.id}`);

      switch (event.type) {
        case "checkout.session.completed": {
          const session = event.data.object as Stripe.Checkout.Session;
          console.log(
            `[Stripe Webhook] Payment completed — user_id: ${session.metadata?.user_id}, ` +
              `product: ${session.metadata?.product_category}/${session.metadata?.product_key}, ` +
              `amount: ${session.amount_total} ${session.currency?.toUpperCase()}`
          );
          // TODO: Update application/appeal payment status in DB
          // For now, log the successful payment
          break;
        }

        case "payment_intent.succeeded": {
          const pi = event.data.object as Stripe.PaymentIntent;
          console.log(`[Stripe Webhook] PaymentIntent succeeded: ${pi.id}`);
          break;
        }

        case "payment_intent.payment_failed": {
          const pi = event.data.object as Stripe.PaymentIntent;
          console.log(`[Stripe Webhook] PaymentIntent failed: ${pi.id}`);
          break;
        }

        default:
          console.log(`[Stripe Webhook] Unhandled event type: ${event.type}`);
      }

      return res.json({ received: true });
    }
  );

  console.log("[Stripe] Webhook endpoint registered at /api/stripe/webhook");
}
