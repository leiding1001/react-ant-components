/* eslint-disable no-constant-condition */
import {fork, all} from 'redux-saga/effects';

import {FeedbackSaga} from '../../components/feedback';

export default function* root() {
  yield all([
    fork(FeedbackSaga)
  ]);
}
