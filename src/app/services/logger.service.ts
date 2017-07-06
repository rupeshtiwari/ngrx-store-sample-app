import * as R from 'ramda';
export const log = (msg, obj = '') => R.tap(console.log(msg, obj));
