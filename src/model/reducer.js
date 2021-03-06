import {combineReducers} from 'redux';
import contact from './contact';
import courses from './courses';
import courseTypes from './coursetypes';
import drawer from './drawer';
import news from './news';
import login from './login';
import notification from './notification';
import memberships from './memberships';
import membershipTypes from './membershiptypes';
import password from './password';
import profile from './profile';
import statistics from './statistics';

export default combineReducers({
  contact,
  courses,
  courseTypes,
  drawer,
  news,
  login,
  notification,
  memberships,
  membershipTypes,
  password,
  profile,
  statistics
})
