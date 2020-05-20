import React from 'react';
import { login, logout } from '../../actions/auth';

test('should check if login works correctly', () => {
    const uid = "1223452ada";
    const action = login(uid);
    expect(action).toEqual({
        type: 'LOGIN',
        uid
    });
});

test('should check if logout works', () => {
    const action = logout();
    expect(action).toEqual({
        type: 'LOGOUT'
    });
});