
import {graphReducer} from './graphReducer.js';
import { combineReducers } from "redux"
import { helpReducer } from './helpReducer.js';


export default combineReducers({
  graphReducer:graphReducer,
  helpReducer:helpReducer,
});


