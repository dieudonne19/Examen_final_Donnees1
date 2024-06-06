
DROP TABLE IF EXISTS ticketball;

CREATE DATABASE ticketball;

\c ticketball;


DROP TABLE IF EXISTS Client;
CREATE TABLE Client(
        id     serial,
        first_name     Varchar (200),
        last_name     Varchar (200),
        email     Varchar (50),
        "password" Varchar (200),
        PRIMARY KEY (id)
);



DROP TABLE IF EXISTS "match";
CREATE TABLE match(
        id     Varchar,
        name     Varchar (200),
        "date"     Date,
        hour     Time,
        location     Varchar (255),
        stadium     Varchar (255),
        ticket_number     Int,
        PRIMARY KEY (id)
);



DROP TABLE IF EXISTS ticket;
CREATE TABLE ticket(
        id     Varchar (255),
        price  Int,
        id_match     Varchar,
        PRIMARY KEY (id)
);



DROP TABLE IF EXISTS team_1;
CREATE TABLE team_1(
        id     Varchar (255),
        name     Varchar (200),
        logo     Varchar (255),
        PRIMARY KEY (id)
);



DROP TABLE IF EXISTS team_2;
CREATE TABLE team_2(
        id     Varchar (255),
        name     Varchar (200),
        logo     Varchar (255),
        PRIMARY KEY (id)
);



DROP TABLE IF EXISTS payement;
CREATE TABLE payement(
        id     serial,
        "date"     Date,
        id_command     INT,
        PRIMARY KEY (id)
);



DROP TABLE IF EXISTS command;
CREATE TABLE command(
        id     serial,
        id_Client     INT,
        id_ticket     Varchar (255),
        PRIMARY KEY (id)
);



DROP TABLE IF EXISTS contain;
CREATE TABLE contain(
        id Varchar(255),
        id_match     Varchar(255),
        id_team_1     Varchar (255),
        id_team_2     Varchar (255),
        PRIMARY KEY (id, id_match, id_team_1, id_team_2)
);



ALTER TABLE ticket ADD CONSTRAINT FK_ticket_id_match FOREIGN KEY (id_match) REFERENCES match(id);
ALTER TABLE payement ADD CONSTRAINT FK_payement_id_command FOREIGN KEY (id_command) REFERENCES command(id);
ALTER TABLE command ADD CONSTRAINT FK_command_id_Client FOREIGN KEY (id_Client) REFERENCES Client(id);
ALTER TABLE command ADD CONSTRAINT FK_command_id_ticket FOREIGN KEY (id_ticket) REFERENCES ticket(id);
ALTER TABLE contain ADD CONSTRAINT FK_contain_id_match FOREIGN KEY (id_match) REFERENCES match(id);
ALTER TABLE contain ADD CONSTRAINT FK_contain_id_team_1 FOREIGN KEY (id_team_1) REFERENCES team_1(id);
ALTER TABLE contain ADD CONSTRAINT FK_contain_id_team_2 FOREIGN KEY (id_team_2) REFERENCES team_2(id);
