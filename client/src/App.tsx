import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";

// Layout
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Pages
import Home from "./pages/Home";
import ServicesOverview from "./pages/ServicesOverview";

// Certification pages
import CertificationISO9001 from "./pages/certifications/ISO9001";
import CertificationISO14001 from "./pages/certifications/ISO14001";
import CertificationISO45001 from "./pages/certifications/ISO45001";
import CertificationISO27001 from "./pages/certifications/ISO27001";
import CertificationISO22000 from "./pages/certifications/ISO22000";
import CertificationBNSP from "./pages/certifications/BNSP";

// Service pages
import VerifiedCV from "./pages/services/VerifiedCV";
import ProfessionalTraining from "./pages/services/ProfessionalTraining";
import CareerIndividuals from "./pages/services/CareerIndividuals";
import CareerCorporations from "./pages/services/CareerCorporations";

// Resources pages
import Blog from "./pages/resources/Blog";
import BlogPost from "./pages/resources/BlogPost";
import Downloads from "./pages/resources/Downloads";
import Webinars from "./pages/resources/Webinars";
import Tools from "./pages/resources/Tools";

// Partners
import TrainingPartners from "./pages/partners/TrainingPartners";
import CertificationPartners from "./pages/partners/CertificationPartners";

// About
import OurStory from "./pages/about/OurStory";
import SchemeInfo from "./pages/about/SchemeInfo";
import QualityPolicy from "./pages/about/QualityPolicy";
import Contact from "./pages/about/Contact";

// Complaints & Appeals
import ComplaintsPage from "./pages/ComplaintsPage";
import AppealsPage from "./pages/AppealsPage";

// Dashboard
import Dashboard from "./pages/Dashboard";
import PaymentPage from "./pages/PaymentPage";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col silver-bg">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={() => <Layout><Home /></Layout>} />

      {/* Services */}
      <Route path="/services" component={() => <Layout><ServicesOverview /></Layout>} />
      <Route path="/services/certification" component={() => <Layout><ServicesOverview /></Layout>} />
      <Route path="/services/certification/iso9001" component={() => <Layout><CertificationISO9001 /></Layout>} />
      <Route path="/services/certification/iso14001" component={() => <Layout><CertificationISO14001 /></Layout>} />
      <Route path="/services/certification/iso45001" component={() => <Layout><CertificationISO45001 /></Layout>} />
      <Route path="/services/certification/iso27001" component={() => <Layout><CertificationISO27001 /></Layout>} />
      <Route path="/services/certification/iso22000" component={() => <Layout><CertificationISO22000 /></Layout>} />
      <Route path="/services/certification/bnsp" component={() => <Layout><CertificationBNSP /></Layout>} />
      <Route path="/services/verified-cv" component={() => <Layout><VerifiedCV /></Layout>} />
      <Route path="/services/training" component={() => <Layout><ProfessionalTraining /></Layout>} />
      <Route path="/services/career/individuals" component={() => <Layout><CareerIndividuals /></Layout>} />
      <Route path="/services/career/corporations" component={() => <Layout><CareerCorporations /></Layout>} />

      {/* Resources */}
      <Route path="/resources/blog" component={() => <Layout><Blog /></Layout>} />
      <Route path="/resources/blog/:slug" component={() => <Layout><BlogPost /></Layout>} />
      <Route path="/resources/downloads" component={() => <Layout><Downloads /></Layout>} />
      <Route path="/resources/webinars" component={() => <Layout><Webinars /></Layout>} />
      <Route path="/resources/tools" component={() => <Layout><Tools /></Layout>} />

      {/* Partners */}
      <Route path="/partners" component={() => <Layout><TrainingPartners /></Layout>} />
      <Route path="/partners/training" component={() => <Layout><TrainingPartners /></Layout>} />
      <Route path="/partners/certification" component={() => <Layout><CertificationPartners /></Layout>} />

      {/* About */}
      <Route path="/about/story" component={() => <Layout><OurStory /></Layout>} />
      <Route path="/about/scheme" component={() => <Layout><SchemeInfo /></Layout>} />
      <Route path="/about/quality-policy" component={() => <Layout><QualityPolicy /></Layout>} />
      <Route path="/about/contact" component={() => <Layout><Contact /></Layout>} />

      {/* Complaints & Appeals */}
      <Route path="/complaints" component={() => <Layout><ComplaintsPage /></Layout>} />
      <Route path="/appeals" component={() => <Layout><AppealsPage /></Layout>} />

      {/* Dashboard */}
      <Route path="/dashboard" component={() => <Layout><Dashboard /></Layout>} />
      <Route path="/dashboard/:tab" component={() => <Layout><Dashboard /></Layout>} />
      {/* Payment */}
      <Route path="/payment" component={() => <Layout><PaymentPage /></Layout>} />

      {/* 404 */}
      <Route path="/404" component={() => <Layout><NotFound /></Layout>} />
      <Route component={() => <Layout><NotFound /></Layout>} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
