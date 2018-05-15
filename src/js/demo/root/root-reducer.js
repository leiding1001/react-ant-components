import {combineReducers} from 'redux';

import {FeedbackReducer} from '../../components/feedback';

const rootReducers = combineReducers({
  feedback: FeedbackReducer
});

export default rootReducers;
