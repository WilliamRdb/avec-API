BEGIN;

INSERT INTO "user" ("email", "password", "first_name", "last_name", "role") VALUES 
('test@test.fr', '1234', 'Jean', 'Dujardin', 'public'),
('pipo@test.fr', '1234', 'Alexandre', 'Astier', 'admin');

INSERT INTO "bed" ("num", "floor", "availability", "occupancy_time","user_bed") VALUES 
(1,3,true,5,1),
(7,5,true,2,1),
(143,5,true,0,2);

COMMIT;