export const SAVE = '[App] save';
export const SAVE_COMPLETE = '[App] save complete';
export const SAVE_FAIL = '[App] save fail';

export const RESTORE_APP_STATE = '[APP] Restore App State';
export const APP_STATE_AVAILABLE = '[APP] App State Available';

export const save = (appState) => ({ type: SAVE, payload: appState });
export const saveComplete = (val) => ({ type: SAVE_COMPLETE, payload: val });
export const saveFail = (e) => ({ type: SAVE_FAIL, payload: e });
export const appStateAvailable = (s) => ({ type: APP_STATE_AVAILABLE, payload: s });
