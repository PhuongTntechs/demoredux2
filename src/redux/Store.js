import { createStore } from 'redux';
import reducer from './reducers/Reducer';

// reducer
/*
const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'FILTER_SHOW_ALL':
        return { ...state, filterStatus: 'SHOW_ALL' };
    case 'FILTER_MEMMORIZED':
        return { ...state, filterStatus: 'MEMORIZED' };
    case 'FILTER_NEED_PRACITICE':
        return { ...state, filterStatus: 'NEED_PRACITICE' };
    case 'TOGGLE_MEMORIZED': return {
      ...state,
      arrWords: state.arrWords.map(e => {
        if (e.id !== action.id) return e;
        return { ...e, memorized: !e.memorized };
      })
    };
    case 'TOGGLE_IS_ADDING': return {
      ...state,
      isAdding: !state.isAdding
    };
    case 'ADD_WORD': return {
      ...state,
      arrWords: [{
        id: state.arrWords.length + 1,
        en: action.en,
        vn: action.vn,
        memorized: false,
        isShow: false
      }].concat(state.arrWords)
    };
    default:
      break;
  }
  return state;
};
*/

// create store
const store = createStore(reducer);
export default store;
