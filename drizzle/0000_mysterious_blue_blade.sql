CREATE TABLE `songs` (
	`id` integer PRIMARY KEY NOT NULL,
	`name` text,
	`url` text
);
--> statement-breakpoint
CREATE TABLE `users` (
	`id` text PRIMARY KEY NOT NULL,
	`first_name` text,
	`last_name` text,
	`email` text
);
