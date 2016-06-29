import { createReducer } from 'redux-act';
import { combineReducers } from 'redux';
import { Map } from 'immutable';

import { getSomeAsyncData } from './actions';

const initialState = Map({
  loading: false,
  response: []
});

export const postsByJsonPlaceholder = createReducer({
  [getSomeAsyncData.request]: (state, payload) => {
    return state.set('loading', true);
  },
  [getSomeAsyncData.ok]: (state, response) => {
    return state
                .set('response', response.data)
                .set('loading', false);
  },
  [getSomeAsyncData.error]: (state, payload) => {
    return state.set('loading', false);
  }
}, initialState);

export const rootReducer = combineReducers({
  postsByJsonPlaceholder
});