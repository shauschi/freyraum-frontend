'use strict';
import {
  setPath,
  assignPath,
  togglePath,
  viewPath,
  findBy,
  findById
} from './../RamdaUtils';

describe('RamdaUtils tests', () => {

  let state;

  beforeEach(() => {
    state = {
      hello: 'world',
      foo: {
        bar: true,
        bar2: true
      },
      data: {
        test: ['one', 'two', 'three']
      }
    }
  });

  describe('test viewPath', () => {
    it('should return the expected value', () => {
      expect(viewPath([], state)).toEqual(state);
      expect(viewPath(['hello'], state)).toEqual('world');
      expect(viewPath(['data', 'test', 1], state)).toEqual('two');
      expect(viewPath(['any', 'not', 'existing', 'path'], state)).toEqual(undefined);
    });
  });

  describe('test setPath', () => {
    it('should override the existing state without a given path', () => {
      const nextState = setPath([], 'override all', state);
      const expectedState = 'override all';
      expect(nextState).toEqual(expectedState);
    });

    it('should set the value along path to the new value', () => {
      const nextState = setPath(['foo'], {newBar: true}, state);
      const expectedState = {
        hello: 'world',
        foo: {
          newBar: true
        },
        data: {
          test: ['one', 'two', 'three']
        }
      };
      expect(nextState).toEqual(expectedState);
    });

    it('should set the value along path with array index to the new value', () => {
      const nextState = setPath(['data', 'test', 1], 'new two', state);
      const expectedState = {
        hello: 'world',
        foo: {
          bar: true,
          bar2: true
        },
        data: {
          test: ['one', 'new two', 'three']
        }
      };
      expect(nextState).toEqual(expectedState);
    });
  });

  describe('test assignPath', () => {

    it('should add the new value along path to the existing object', () => {
      const nextState = assignPath(['foo'], {newBar: true}, state);
      const expectedState = {
        hello: 'world',
        foo: {
          bar: true,
          bar2: true,
          newBar: true
        },
        data: {
          test: ['one', 'two', 'three']
        }
      };
      expect(nextState).toEqual(expectedState);
    });
  });

  describe('test togglePath', () => {

    it('should add the new value along path to the existing object', () => {
      const nextState = togglePath(['foo', 'bar'], state);
      const expectedState = {
        hello: 'world',
        foo: {
          bar: false,
          bar2: true
        },
        data: {
          test: ['one', 'two', 'three']
        }
      };
      expect(nextState).toEqual(expectedState);
    });
  });

  describe('test findBy', () => {
    it('should return the expected value', () => {
      expect(findBy('key', undefined, 'test')).toEqual(undefined);
      expect(findBy('key', null, 'test')).toEqual(undefined);
      expect(findBy('key', 'not an array', 'test')).toEqual(undefined);
      expect(findBy('key', 17, 'test')).toEqual(undefined);
      expect(findBy('key', {}, 'test')).toEqual(undefined);
      expect(findBy('key', [], 'test')).toEqual(undefined);
      expect(findBy('key', ['hello'], 'test')).toEqual(undefined);
      expect(findBy('key', [{key: 'foo', name: 'Bar'}], 'test')).toEqual(undefined);

      expect(findBy('key', [{key: 'test', name: 'Foo'}], 'test'))
        .toEqual({key: 'test', name: 'Foo'});
      expect(findBy('key', [{key: 'test', name: 'Foo'}, {key: 'test2', name: 'Bar'}], 'test2'))
        .toEqual({key: 'test2', name: 'Bar'});
    });
  });

  describe('test findById', () => {
    it('should return the expected value', () => {
      expect(findById(undefined, 'test')).toEqual(undefined);
      expect(findById(null, 'test')).toEqual(undefined);
      expect(findById('not an array', 'test')).toEqual(undefined);
      expect(findById(17, 'test')).toEqual(undefined);
      expect(findById({}, 'test')).toEqual(undefined);
      expect(findById([], 'test')).toEqual(undefined);
      expect(findById(['hello'], 'test')).toEqual(undefined);
      expect(findById([{id: 'foo', name: 'Bar'}], 'test')).toEqual(undefined);

      expect(findById([{id: 'test', name: 'Foo'}], 'test'))
        .toEqual({id: 'test', name: 'Foo'});
      expect(findById([{id: 'test', name: 'Foo'}, {id: 'test2', name: 'Bar'}], 'test2'))
        .toEqual({id: 'test2', name: 'Bar'});
    });
  });

});
