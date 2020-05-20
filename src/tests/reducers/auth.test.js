import React from 'react';
import authReducer from '../../reducers/auth';

test('login should work correctly', () => {
    const uid = "1234ada";
    const action = {
        type: 'LOGIN',
        uid
    };
    const state = authReducer(undefined, action);
    expect(state.uid).toBe(uid);
});

test('logout should work', () => {
    const action = {
        type: 'LOGOUT'
    };
    const state = authReducer(undefined, action);
    expect(state).toEqual({});
})