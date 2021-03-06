import {createActions, handleActions} from 'redux-actions';
import {sendContact as sendContactApiCall} from '../../service/contact';
import {assignPath, setPath} from '../../utils/RamdaUtils';
import {showNotification} from "../notification";

const initialState = {
  pending: false,
  error: '',
  data: {
    firstname: '',
    lastname: '',
    email: '',
    telephone: '',
    subject: '',
    message: ''
  }
};

export const actions = createActions({
  CONTACT: {
    SEND: {
      PENDING: undefined,
      SUCCESS: message => message,
      ERROR: error => error
    },
    ON_DATA_CHANGED: (path, value) => ({path: path, value: value}),
  }
});

export const sendContact = contactData => {
  return dispatch => {
    dispatch(actions.contact.send.pending());
    return sendContactApiCall(contactData)
      .then(answer => {
        dispatch(actions.contact.send.success())
        dispatch(showNotification(answer.message, "success"));
      })
      .catch(error => dispatch(actions.contact.send.error(error)))
  }
};

export const contactDataChanged = (id, value) =>
  dispatch => dispatch(actions.contact.onDataChanged(id, value));

export default handleActions({
  [actions.contact.send.pending]: state => setPath(['pending'], true, state),
  [actions.contact.send.success]: state =>
    assignPath([], {pending: false, error: '', data: initialState.data}, state),
  [actions.contact.send.error]: (state, {payload}) =>
    assignPath([], {pending: false, error: payload.message}, state),

  [actions.contact.onDataChanged]: (state, {payload}) =>
    setPath(['data', payload.path], payload.value, state)

}, initialState);
