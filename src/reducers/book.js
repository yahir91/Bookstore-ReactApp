import { initilBookState } from "./index";

const bookReducer = (state = initilBookState, action) => {
  switch(action.type){
    case 'CREATE_BOOK':
      return state = {
        booklist: [...state.booklist, action.payload]
      }
    case 'REMOVE_BOOK':
      return state = {
        booklist: state.booklist.filter(item => item.id !== action.payload.id)
        
      }
    default:
      return state
  }
}

export default bookReducer;