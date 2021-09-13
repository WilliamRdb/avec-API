BEGIN;

DROP TABLE IF EXISTS "user", "bed";

CREATE TABLE "user" (
  "id" serial PRIMARY KEY,
  "email" varchar NOT NULL,
  "password" varchar NOT NULL,
  "first_name" varchar NOT NULL,
  "last_name" varchar NOT NULL,
  "role" varchar NOT NULL
);

CREATE TABLE "bed" (
  "id" serial PRIMARY KEY,
  "num" integer NOT NULL,
  "floor" integer,
  "availability" boolean,
  "occupancy_time" integer,
  "user_bed" integer REFERENCES "user" ("id"),
  "created_at" timestamp NOT NULL DEFAULT NOW(),
  "updated_at" timestamp
);

COMMIT;