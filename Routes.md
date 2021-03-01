# Routes

| URL | GET | POST | PATCH ou PUT | DELETE |
|---|---|---|---|---|
|/login| afficherr la page de login | vérifier l'adresse mail et rediriger vers la bonne page |||
|/password|afficher la page de password si le password est déjà en DB| verifier le password |||
|/login/new|afficher la page de création d'un password pour un nouvel user| créer un password|||
|/home| afficher le tableau de bord d'un user, récupérer lesdernières réservations, lesdernières séances, et le bilan santé||||
|/about_us| affcicher la page à propos de nous||||
|/legal_notices| afficher la page des mentions légales||||
|/members| récupérer la liste des adhérents| créer un adhérent |||
|/profil| récupérer le profil d'un adhérent ||modifier les données d'un adhérent|supprimer un adhérent|
|/coachs|récupérer la liste des coachs| créer un nouveau coach|||
|/coachs/:id|récupérer le profil d'un coach||modifier les données d'un coach|supprimer un coach|
|/reservations| récupérer les réservations d'un user| créer une réservation |||
|/reservations/:id|récupérer une réservation
|/workouts|récupérer les séances| créer une séance de sport|||
|/workout/:id|récupérer une séance workout||modifier une séance| supprimer une séance|
