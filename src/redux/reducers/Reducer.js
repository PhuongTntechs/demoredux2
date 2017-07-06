import { combineReducers } from 'redux';
import isAddingReducer from './isAddingReducer';
import arrWordsReducer from './arrWordReducer';
import filterStatusReducer from './filterReducer';

const reducer = combineReducers({
    arrWords: arrWordsReducer,
    filterStatus: filterStatusReducer,
    isAdding: isAddingReducer
});
export default reducer;
