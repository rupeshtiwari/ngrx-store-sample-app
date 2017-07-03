export const SAVE = '[App] save';
export const SAVE_COMPLETE='[App] save complete';
export const SAVE_FAIL ='[App] save fail';

export const save = (appState) => ({type:SAVE,payload:appState});
export const saveComplete = (val) => ({type:SAVE_COMPLETE,payload:val});
export const saveFail = (e) => ({type:SAVE_FAIL,payload:e});