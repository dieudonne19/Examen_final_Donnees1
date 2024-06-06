INSERT INTO Client (first_name, last_name, email, "password") VALUES 
    ('Rafetrason', 'Esthel', 'fetra@gmail.com', '1234'),
    ('Voahangy', 'Rosette', 'rosette@gmail.com', '1234'),
    ('Ramilison', 'Gilbert', 'gil@gmail.com', '1234'),
    ('Arivo', 'Lala', 'lala@gmail.com', '1234');


-- La valeur 296 est du à 4 INSERT dans la TABLE command et payement
-- Dans le cas où la commmande n'est pas INSERE dans la TABLE payement
-- La valeur du ticket commandé n'est pas pris en compte lors du SOMME TOTAL DES VENTES
INSERT INTO "match" VALUES 
    ('m1', 'Match amical', '2024-06-29', '14:00:00', 'Paris', 'Parc des Princes', 296),
    ('m2', 'Match amical', '2024-07-10', '16:30:00', 'Manchester', 'Old Trafford', 400),
    ('m3', 'Match amical', '2024-07-25', '10:00:00', 'Espagne', 'Bernabeau', 500),
    ('m4', 'Match amical', '2024-06-30', '07:00:00', 'Manchester', 'Etihad Stadium', 200);


INSERT INTO ticket VALUES 
    ('tck1', 30, 'm1'),
    ('tck2', 40, 'm2'),
    ('tck3', 80, 'm3'),
    ('tck4', 40, 'm4');

INSERT INTO team_1 VALUES 
    ('t1', 'Olympique de Marseille', 'URL'),
    ('t2', 'Manchester United', 'URL'),
    ('t3', 'Real Madrid', 'URL'),
    ('t4', 'Manchester City', 'URL');
   

INSERT INTO team_2 VALUES 
    ('t1', 'Paris Saint-Germain', 'URL'),
    ('t2', 'Aston Villa', 'URL'),
    ('t3', 'Bourussia Dortmund', 'URL'),
    ('t4', 'Arsenal', 'URL');


INSERT INTO contain VALUES 
    ('c1', 'm1', 't1', 't1'),
    ('c2', 'm2', 't2', 't2'),
    ('c3', 'm3', 't3', 't3'),
    ('c4', 'm4', 't4', 't4');


INSERT INTO command (id_client, id_ticket) VALUES
    (1, 'tck1'),
    (1, 'tck1'),
    (1, 'tck1'),
    (1, 'tck1');


INSERT INTO payement ("date", id_command) VALUES 
    (CURRENT_DATE, 1),
    (CURRENT_DATE, 2),
    (CURRENT_DATE, 3),
    (CURRENT_DATE, 4);



CREATE VIEW total_per_client AS SELECT sum(ticket.price) AS total 
    FROM payement 
    INNER JOIN command ON payement.id_command = command.id 
    INNER JOIN ticket ON ticket.id = command.id_ticket 
    INNER JOIN client ON command.id_client = client.id 
    WHERE payement.id_command IS NOT NULL 
    GROUP BY client.id;


-- CREATE VIEW total_ticket AS SELECT count(ticket.price) AS ticket_number, ticket.id AS ticket_id, client.first_name, client.last_name 
--     FROM payement 
--     INNER JOIN command ON payement.id_command = command.id 
--     INNER JOIN ticket ON ticket.id = command.id_ticket 
--     INNER JOIN client ON command.id_client = client.id 
--     WHERE payement.id_command IS NOT NULL 
--     GROUP BY client.id, ticket.id;