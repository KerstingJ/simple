import { combineReducers } from "redux";
import loginReducer from './loginReducer';
import projectsReducer from './projectsReducer';
import contractorsReducer from './contractorsReducer';

export default combineReducers({
  login: loginReducer,
  projects: projectsReducer,
  contractors: contractorsReducer
});
