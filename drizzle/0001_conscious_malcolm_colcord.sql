CREATE TABLE `appeals` (
	`id` int AUTO_INCREMENT NOT NULL,
	`appealId` varchar(32) NOT NULL,
	`userId` int NOT NULL,
	`certificationRef` varchar(255),
	`appealType` enum('certification_decision','exam_result','assessment_process','suspension_revocation','other') NOT NULL,
	`reason` text NOT NULL,
	`desiredOutcome` text,
	`supportingDocUrl` text,
	`status` enum('submitted','under_review','hearing_scheduled','decided','closed') NOT NULL DEFAULT 'submitted',
	`committeeAssigned` varchar(255),
	`hearingDate` timestamp,
	`decision` text,
	`decisionDate` timestamp,
	`appealFeePaid` boolean DEFAULT false,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `appeals_id` PRIMARY KEY(`id`),
	CONSTRAINT `appeals_appealId_unique` UNIQUE(`appealId`)
);
--> statement-breakpoint
CREATE TABLE `blog_posts` (
	`id` int AUTO_INCREMENT NOT NULL,
	`title` varchar(500) NOT NULL,
	`slug` varchar(500) NOT NULL,
	`excerpt` text,
	`content` text NOT NULL,
	`category` enum('certification_insights','career_tips','industry_updates','training_methodologies') NOT NULL,
	`authorName` varchar(255),
	`coverImageUrl` text,
	`isPublished` boolean DEFAULT false,
	`publishedAt` timestamp,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `blog_posts_id` PRIMARY KEY(`id`),
	CONSTRAINT `blog_posts_slug_unique` UNIQUE(`slug`)
);
--> statement-breakpoint
CREATE TABLE `certification_applications` (
	`id` int AUTO_INCREMENT NOT NULL,
	`userId` int NOT NULL,
	`certificationScheme` varchar(64) NOT NULL,
	`auditorLevel` enum('provisional','auditor','lead_auditor','business_improvement') NOT NULL,
	`status` enum('draft','submitted','under_review','approved','rejected','certified') NOT NULL DEFAULT 'draft',
	`paymentStatus` enum('pending','paid','refunded') NOT NULL DEFAULT 'pending',
	`paymentAmount` decimal(12,2),
	`paymentRef` varchar(255),
	`certificateNumber` varchar(128),
	`issuedAt` timestamp,
	`expiresAt` timestamp,
	`notes` text,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `certification_applications_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `complaints` (
	`id` int AUTO_INCREMENT NOT NULL,
	`complaintId` varchar(32) NOT NULL,
	`userId` int,
	`fullName` varchar(255) NOT NULL,
	`email` varchar(320) NOT NULL,
	`phone` varchar(32),
	`organization` varchar(255),
	`complaintType` enum('general','certification','training','technical','staff','other') NOT NULL,
	`subject` varchar(500) NOT NULL,
	`description` text NOT NULL,
	`attachmentUrl` text,
	`preferredContact` enum('email','phone') DEFAULT 'email',
	`status` enum('submitted','acknowledged','in_progress','resolved','closed') NOT NULL DEFAULT 'submitted',
	`assignedTo` varchar(255),
	`resolution` text,
	`satisfactionRating` int,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	`resolvedAt` timestamp,
	CONSTRAINT `complaints_id` PRIMARY KEY(`id`),
	CONSTRAINT `complaints_complaintId_unique` UNIQUE(`complaintId`)
);
--> statement-breakpoint
CREATE TABLE `downloads` (
	`id` int AUTO_INCREMENT NOT NULL,
	`title` varchar(500) NOT NULL,
	`description` text,
	`category` enum('brochure','scheme','application_form','policy','other') NOT NULL,
	`fileUrl` text NOT NULL,
	`fileSize` varchar(32),
	`downloadCount` int DEFAULT 0,
	`isActive` boolean DEFAULT true,
	`sortOrder` int DEFAULT 0,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `downloads_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `partners` (
	`id` int AUTO_INCREMENT NOT NULL,
	`name` varchar(255) NOT NULL,
	`partnerType` enum('training','certification') NOT NULL,
	`description` text,
	`logoUrl` text,
	`websiteUrl` text,
	`location` varchar(255),
	`isActive` boolean DEFAULT true,
	`sortOrder` int DEFAULT 0,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `partners_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `webinars` (
	`id` int AUTO_INCREMENT NOT NULL,
	`title` varchar(500) NOT NULL,
	`description` text,
	`speaker` varchar(255),
	`scheduledAt` timestamp,
	`durationMinutes` int,
	`registrationUrl` text,
	`recordingUrl` text,
	`isUpcoming` boolean DEFAULT true,
	`isActive` boolean DEFAULT true,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `webinars_id` PRIMARY KEY(`id`)
);
