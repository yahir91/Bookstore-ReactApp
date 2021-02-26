const initialFilterState = {
  filter: 'All'
}


const filterReducer = (state = initialFilterState, action) => {
  switch (action.type) {
    case 'CHANGE_FILTER':
      return {
        ...state,
        filter: action.payload
      };
    default:
      return state;
  }
};

export default filterReducer;