import reducer, {actions} from '../';

describe('notifications reducer', () => {

  let state;

  beforeEach(() => {
    state = {
      show: false,
      message: null,
      type: undefined
    }
  });

  describe('with SHOW action', () => {

    it('should change the state', () => {
      const nextState = reducer(state, actions.notification.show({message: 'Test message'}));

      expect(nextState).toEqual({show: true, message: 'Test message', variant: undefined});
    });

    it('should change the state', () => {
      const nextState = reducer(state, actions.notification.show({message: 'Test message', variant: 'error'}));

      expect(nextState).toEqual({show: true, message: 'Test message', variant: 'error'});
    });
  });

  describe('with HIDE action', () => {

    it('should reset the message and hide the notification', () => {
      state = {show: true, message: 'Any message', variant: 'info'};

      const nextState = reducer(state, actions.notification.hide());

      expect(nextState).toEqual({show: false, message: '', variant: 'info'});
    });
  });
});
