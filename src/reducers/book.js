const initialBookState = {
  booklist: [{
    id: Math.random(0, 100),
    title: 'Harry Potter',
    category: 'Fanatsy',
  },
  {
    id: Math.random(0, 100),
    title: 'Terminator',
    category: 'Sci-Fi',
  },
  {
    id: Math.random(0, 100),
    title: 'Steve Jobs',
    category: 'Biography',
  },
  {
    id: Math.random(0, 100),
    title: 'Psycho',
    category: 'Horror',
  }],
};

const bookReducer = (state = initialBookState, action) => {
  switch (action.type) {
    case 'CREATE_BOOK':
      return {
        booklist: [...state.booklist, action.payload],
      };
    case 'REMOVE_BOOK':
      return {
        booklist: state.booklist.filter(item => item.id !== action.payload.id),
      };
    default:
      return state;
  }
};

export default bookReducer;
