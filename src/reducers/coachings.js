const initialState = {
  coachings: [
    {
      id: 1,
      coachName: 'Albus',
      date: 'Mardi 6 avril',
      time: '9h15-9h30',
    },
    {
      id: 2,
      coachName: 'Harry',
      date: 'Lundi 5 avril',
      time: '10h15-10h30',
    },
    {
      id: 3,
      coachName: 'Jean',
      date: 'dimanche 5 avril',
      time: '8h15-8h30',
    },
  ],
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default reducer;
