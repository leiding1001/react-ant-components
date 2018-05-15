import FeedbackUtil from './feedback-util';

export const ADD_MESSAGE = 'ADD_MESSAGE';
export const CLEAR_MESSAGE = 'CLEAR_MESSAGE';
export const SHOW_MODAL = 'SHOW_MODAL';

export const HANDLE_API_ERROR = 'HANDLE_API_ERROR';

export function handleApiError(data) {
  return {
    type: HANDLE_API_ERROR,
    data
  };
}

export function showErrorMsg(data) {
  return showMessage({
    ...data,
    fbStatus: FeedbackUtil.FB_STATUS.ERROR
  });
}

export function showSuccessMsg(data) {
  return showMessage({
    ...data,
    fbStatus: FeedbackUtil.FB_STATUS.SUCCESS
  });
}

export function showMessage(data) {
  return {
    type: ADD_MESSAGE,
    data
  };
}

export function showModal(data) {
  return {
    type: SHOW_MODAL,
    data
  };
}

export function clearMessage() {
  return {
    type: CLEAR_MESSAGE
  };
}
