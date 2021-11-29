import { all } from 'redux-saga/effects';
import weatherSaga from './weather';

// eslint-disable-next-line
export default function* () {
  yield all([
    weatherSaga()
  ]);
}
