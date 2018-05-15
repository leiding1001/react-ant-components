import {put, take, actionChannel, fork, all} from 'redux-saga/effects';

import * as actions from './feedback-action';
import FeedbackUtil from './feedback-util';

export default function* root() {
  yield all([fork(watchHandleApiError)]);
}

export function* watchHandleApiError() {
  const handleApiErrorAction = yield actionChannel(actions.HANDLE_API_ERROR);

  while (true) {
    const action = yield take(handleApiErrorAction);

    const errorInfo = action.data;

    if (errorInfo && errorInfo.fbType) {
      let errorAction;

      switch (errorInfo.fbType) {
        case FeedbackUtil.FB_TYPE.MESSAGE:
          errorAction = actions.showMessage;
          break;
        case FeedbackUtil.FB_TYPE.MODAL:
          errorAction = actions.showModal;
          break;
      }

      yield put(errorAction(errorInfo));
    }
  }
}

