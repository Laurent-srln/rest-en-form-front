# MLD

## Entité 

USER(id, firstname, lastname, email, role)

SPECIALITIES(id, name)

USER_has_SPECIALITIES(#user_id, #specialities_id)

WORKOUT(id, date, content, #user_id)

COMMENT(id, content, #id_user, #id_workout)

HEALTH-CHECK(id, weigh, muscular mass, fat mass, bone mass, water mass, #id_workout)

MEETING(id, date, start time, end time, #id_user)

## Dictionnaire de données

### Table _User_

Champs| Type | Spécificités | Description |
------|-----|--------------|----------
code_user| INT | PRIMARY KEY, UNSIGNED, NOT NULL, AUTO_INCREMENT | L'identifiant du user
firstname | VARCHAR(64) | NOT NULL | Le prénom du user
lastname | VARCHAR (128) | NOT NULL | Le nom du user
email | VARCHAR (128) | NOT NULL | Adresse email du user
role | VARCHAR (128) | NOT NULL | rôle du user
creer le | TIMESTAMP | NOT NULL, DEFAULT CURRENT_TIMESTAMP | La date de création du user
mis_a_jour_le | TIMESTAMP | NOT NULL, DEFAULT CURRENT_TIMESTAMP | La date de dernière modification du user

### Tabble _Specialities_

Champs| Type | Spécificités | Description |
------|-----|--------------|----------
code_speciality | INT | PRIMARY KEY, UNSIGNED, NOT NULL, AUTO_INCREMENT | L'identifiant de la spécialité
name | VARCHAR (128) | NOT NULL | Nom de la spécialité
reer le | TIMESTAMP | NOT NULL, DEFAULT CURRENT_TIMESTAMP | La date de création de la spécialité
mis_a_jour_le | TIMESTAMP | NOT NULL, DEFAULT CURRENT_TIMESTAMP | La date de dernière modification de la spécialité

### Table _Workout_

Champs| Type | Spécificités | Description |
------|-----|--------------|----------
code_workout | INT | PRIMARY KEY, UNSIGNED, NOT NULL, AUTO_INCREMENT | L'identifiant du workout
date | TIMESTAMP | NOT NULL, DEFAULT CURRENT_TIMESTAMP | La date de la séance
content | TEXT | NOT NULL | Description de la séance de workout
auteur | ENTITY | NOT NULL | L'auteur de la séance (code_user)
creer le | TIMESTAMP | NOT NULL, DEFAULT CURRENT_TIMESTAMP | La date de création du user
mis_a_jour_le | TIMESTAMP | NOT NULL, DEFAULT CURRENT_TIMESTAMP | La date de dernière modification du user

### Table _Comment_

Champs| Type | Spécificités | Description |
------|-----|--------------|----------
code_speciality | INT | PRIMARY KEY, UNSIGNED, NOT NULL, AUTO_INCREMENT | L'identifiant du commentaire
content| TEXT | NOT NULL | Commentaire du coach
auteur | ENTITY | NOT NULL | L'auteur du commentaire (code_user)
séance | ENTITY | NOT NULL | La séance correspondante au commentaire (code_workout)
creer le | TIMESTAMP | NOT NULL, DEFAULT CURRENT_TIMESTAMP | La date de création du commentaire
mis_a_jour_le | TIMESTAMP | NOT NULL, DEFAULT CURRENT_TIMESTAMP | La date de dernière modification du commentaire

### Table _Health-check_

Champs| Type | Spécificités | Description |
------|-----|--------------|----------
code_health | INT | PRIMARY KEY, UNSIGNED, NOT NULL, AUTO_INCREMENT | L'identifiant du bilan santé
weight | INT | NOT NULL | Le poids du user
muscular mass| INT | NOT NULL | masse musculaire du user
fat mass | INT | NOT NULL | masse graisseuse du user
bone mass | INT | NOT NULL | masse osseuse du user
water mass | INT | NOT NULL | masse hydrique du user
seance | ENTITY | NOT NULL | La séance liée aux informations santé (code_workout)
creer le | TIMESTAMP | NOT NULL, DEFAULT CURRENT_TIMESTAMP | La date de création du commentaire
mis_a_jour_le | TIMESTAMP | NOT NULL, DEFAULT CURRENT_TIMESTAMP | La date de dernière modification du commentaire

### Table _Meeting_

Champs| Type | Spécificités | Description |
------|-----|--------------|----------
code_meeting | INT | PRIMARY KEY, UNSIGNED, NOT NULL, AUTO_INCREMENT | L'identifiant du RDV
date | TIMESTAMP | NOT NULL TIMESTAMP | date des RDV
start time | TIMESTAMP | NOT NULL TIMESTAMP | heure de début du RDV
end time | TIMESTAMP | NOT NULL TIMESTAMP | heure de fin du RDV
creer le | TIMESTAMP | NOT NULL, DEFAULT CURRENT_TIMESTAMP | La date de création du RDV
mis_a_jour_le | TIMESTAMP | NOT NULL, DEFAULT CURRENT_TIMESTAMP | La date de dernière modification du RDV

### Table d'association _POSSEDER_ entre les tables _User_ et _Specialities_

Champs| Type | Spécificités | Description |
------|-----|--------------|----------
code_user | ENTITY | PRIMARY KEY, UNSIGNED, NOT NULL, AUTO_INCREMENT | L'identifiant du user
code_speciality | ENTITY | PRIMARY KEY, UNSIGNED, NOT NULL, AUTO_INCREMENT | L'identifiant de la spécialité






