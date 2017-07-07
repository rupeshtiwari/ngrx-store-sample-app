export const SAVE_APP_STATE = '[App] Save App State';
export const SAVE_APP_STATE_SUCCESS = '[App] Save App State Success';
export const SAVE_APP_STATE_FAIL = '[App] Save App State Fail';

export const RESTORE_APP_STATE = '[APP] Restore App State';
export const RESTORE_APP_STATE_SUCCESS = '[APP] Restore App State Success';
export const RESTORE_APP_STATE_FAIL = '[APP] Restore App State Fail';

export const saveAppState = (appState) => ({ type: SAVE_APP_STATE, payload: appState });
export const restoreAppState = (key) => ({ type: RESTORE_APP_STATE, payload: key });
export const saveAppStateSuccess = (val) => ({ type: SAVE_APP_STATE_SUCCESS, payload: val });
export const saveAppStateFail = (e) => ({ type: SAVE_APP_STATE_FAIL, payload: e });
export const restoreAppStateSuccess = (s) => ({ type: RESTORE_APP_STATE_SUCCESS, payload: s });
