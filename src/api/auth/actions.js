import { createAction } from 'redux-actions';

export const key = 'api/auth';

export const getAuthStatus = createAction(`${key}/GET_AUTH_STATUS`);
export const authResult = createAction(`${key}/AUTH_RESULT`);
export const authRequired = createAction(`${key}/AUTH_REQUIRED`);
export const logOut = createAction(`${key}/LOG_OUT`);

export default {
    getAuthStatus,
    authResult,
    authRequired,
    logOut,
};
