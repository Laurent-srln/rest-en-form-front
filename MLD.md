# MLD

## Entité 

USER(id, firstname, lastname, email, role)

SPECIALITY(id, name)

USER_has_SPECIALITY(#user_id, #speciality_id)

WORKOUT(id, date, content, #user_id)

COMMENT(id, content, #user_id, #workout_id)

HEALTH-CHECK(id, weigh, muscular mass, fat mass, bone mass, water mass, #id_workout)

MEETING(id, date, start time, end time, #coach_user_id, #member_user_id)

## Dictionnaire de données

### Table _User_

Champs| Type | Spécificités | Description |
------|-----|--------------|----------
code_user| INT | PRIMARY KEY, UNSIGNED, NOT NULL, AUTO_INCREMENT | L'identifiant du user
firstname | TEXT | NOT NULL | Le prénom du user
lastname | TEXT | NOT NULL | Le nom du user
email | TEXT | NOT NULL | Adresse email du user
role | TEXT | NOT NULL | rôle du user
created_at | TIMESTAMPTZ | NOT NULL, DEFAULT CURRENT_TIMESTAMPTZ | La date de création du user
updated at | TIMESTAMPTZ | NOT NULL, DEFAULT CURRENT_TIMESTAMPTZ | La date de dernière modification du user

### Tabble _Speciality_

Champs| Type | Spécificités | Description |
------|-----|--------------|----------
code_speciality | INT | PRIMARY KEY, UNSIGNED, NOT NULL, AUTO_INCREMENT | L'identifiant de la spécialité
name | TEXT | NOT NULL | Nom de la spécialité
created_at| TIMESTAMPTZ | NOT NULL, DEFAULT CURRENT_TIMESTAMPTZ | La date de création de la spécialité
updated_at | TIMESTAMPTZ | NOT NULL, DEFAULT CURRENT_TIMESTAMPTZ | La date de dernière modification de la spécialité

### Table _Workout_

Champs| Type | Spécificités | Description |
------|-----|--------------|----------
code_workout | INT | PRIMARY KEY, UNSIGNED, NOT NULL, AUTO_INCREMENT | L'identifiant du workout
date | TIMESTAMPTZ | NOT NULL, DEFAULT CURRENT_TIMESTAMPTZ | La date de la séance
content | TEXT | NOT NULL | Description de la séance de workout
auteur | ENTITY | NOT NULL | L'auteur de la séance (code_user)
created_at| TIMESTAMPTZ | NOT NULL, DEFAULT CURRENT_TIMESTAMPTZ | La date de création du user
updated_at | TIMESTAMPTZ | TIMESTAMPTZ | La date de dernière modification du user

### Table _Comment_

Champs| Type | Spécificités | Description |
------|-----|--------------|----------
code_speciality | INT | PRIMARY KEY, UNSIGNED, NOT NULL, AUTO_INCREMENT | L'identifiant du commentaire
content| TEXT | NOT NULL | Commentaire du coach
auteur | ENTITY | NOT NULL | L'auteur du commentaire (code_user)
séance | ENTITY | NOT NULL | La séance correspondante au commentaire (code_workout)
created_at| TIMESTAMPTZ | NOT NULL, DEFAULT CURRENT_TIMESTAMPTZ | La date de création du commentaire
updated_at | TIMESTAMPTZ | TIMESTAMPTZ | La date de dernière modification du commentaire

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
created_at| TIMESTAMPTZ | NOT NULL, DEFAULT CURRENT_TIMESTAMPTZ | La date de création du commentaire
updated_at | TIMESTAMPTZ | CURRENT_TIMESTAMPTZ | La date de dernière modification du commentaire

### Table _Coaching_

Champs| Type | Spécificités | Description |
------|-----|--------------|----------
code_meeting | INT | PRIMARY KEY, UNSIGNED, NOT NULL, AUTO_INCREMENT | L'identifiant du RDV
date | TIMESTAMPTZ | NOT NULL TIMESTAMP | date des RDV
start time | TIMESTAMPTZ | NOT NULL TIMESTAMPTZ | heure de début du RDV
end time | TIMESTAMPTZ | NOT NULL TIMESTAMPTZ | heure de fin du RDV
coach | ENTITY | NOT NULL | l'identifiant du coach qui dirigera la séance coaching(code_user_coach)
member | ENTITY || l'identifiant de l'adhérent qui s'inscrira à la séance coaching(code_user_member)
created_at| TIMESTAMPTZ | NOT NULL, DEFAULT CURRENT_TIMESTAMPTZ | La date de création du RDV
updated_at | TIMESTAMPTZ | NOT NULL, DEFAULT CURRENT_TIMESTAMPTZ | La date de dernière modification du RDV

### Table d'association _POSSEDER_ entre les tables _User_ et _Specialities_

Champs| Type | Spécificités | Description |
------|-----|--------------|----------
code_user | ENTITY | PRIMARY KEY, UNSIGNED, NOT NULL, AUTO_INCREMENT | L'identifiant du user
code_speciality | ENTITY | PRIMARY KEY, UNSIGNED, NOT NULL, AUTO_INCREMENT | L'identifiant de la spécialité






