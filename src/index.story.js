import 'babel-polyfill'

import React from 'react'
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { storiesOf, action, linkTo } from '@kadira/storybook';

import AsyncApp from './containers/AsyncApp';
import { rootReducer } from './reducers';

const store = createStore( rootReducer, applyMiddleware(thunkMiddleware));

storiesOf('Redux React Stories ', module)
     .addDecorator((getStory) => (<Provider store={store}>
                                          { getStory() }
                                 </Provider>
                                       ))
     .add('React Component', () => <AsyncApp />)
     .add('react Component 2', () => <AsyncApp2 />);
