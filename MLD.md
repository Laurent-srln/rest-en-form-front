### MLD

## Entité 

USER(id, firstname, lastname, email,#specialities_id)

SPECIALITIES(id, name)

USER_has_SPECIALITIES(#user_id, #specialities_id)

WORKOUT(id date, content, #user_id)

COMMENT(id, content, #id_user, #id_workout)

HEALTH-CHECK(id, weigh, muscular mass, fat mass, bone mass, water mass, #id_workout)

MEETING(id, date, start time, end time, #id_user)

