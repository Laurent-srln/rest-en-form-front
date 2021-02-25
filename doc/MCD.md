# Creation du MCD

## Analyse des entités

- Manager
  - firstname
  - lastname
  - email
  - password

- Coach
  - firstname
  - lastname
  - email
  - password

- Adherent
  - firstname
  - lastname
  - email
  - password

- Spécialities
  - name

- Workout
  - date
  - content

- Comment
  - content

- Health-check
  - weigh
  - muscular mass
  - fat mass
  - bone mass

- Meeting
  - date
  - heure de début
  - heure de fin
  
## Analyse des associations entre entité

### Manager <-> Coach

Un Manager _dirige_ un Coach au minimum ou plusieurs Coach au maximum : 1N
Un Coach _est dirigé_ par un Manager au minimum ou un maximum : 11

### Coach <-> Meeting

Un Coach _répond_ à 0 Meeting au minimum ou N Meeting au maximum : 0N
Un Meeting _est pris en charge_ par 1 Coach au minimum ou 1 Coach au max : 11

## Coach <-> Spécialities

Un Coach _possède_ 1 spécialité au minimum et N spécialités au maximum : 1N
Une spécialité _est possédée_ par 1 Coach au minimum et N Coach au maximum : 0N

## Coach <-> Comment

Un Coach peut _écrire_ 0 commentaire au minimum ou N commentaire au maximum : 01
Un Comment est _écrit_ par 1 Coach au min ou 1 Coach au maximum : 11

### Adherent <-> Meeting

Un Adhérent _demande_ 0 Meeting au minimum et N Meeting au maximum : 0N
Un Meeting _est demandé_ par 1 Adhérent au minimum ou 1 Adhérent au max : 11

### Adherent <-> Workout

Un Adhérent _décrit_ 0 Workout au minimum et N Workout au maximum : 0N
Un Workout est _écrit_ par 1 Adhérent au minimum ou 1 Adhérent au maximum : 11

## Workout <-> Health-check

Un Workout _s'associe_ avec 0 Health-check au minimum et 1 Health-check au Max : 01
Un Health-check est _associé_ avec 1 Workout au minimum et 1 Workout au Maximum: 11

### Workout <-> Comment

Un Workout _possède_ 0 comment au minimum, et 1 commentaire au maximum: 01
Un commentaire _décrit_ 1 Workout au minimum et 1 Workout au maximum: 11

## MCD ( Mocodo)

Match, 11 Comment, 01 Workout
Workout : date, content
Associate, 01 Workout, 11 Health-check
Health-check: weight,muscular mass, fat mass, bone mass

Comment: content
Discribe, 0N Adherent, 11 Workout
Adherent: firstname, lastname, email, password
Ask, 0N Adherent, 11 Meeting

Written by, 01 Coach, 11 Comment
Coach: firstname, lasname, email, password
Answer, 0N Coach, 11 Meeting
Meeting: date, start time, end time

Manager: firstname, lastname, email, password
Lead, 11 Coach, 1N Manager
Owned by, 1N Coach, 0N Specialities
Specialities:name

