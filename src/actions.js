import axios from 'axios';
import {createActionAsync} from 'redux-act-async';

export const getSomeAsyncData = createActionAsync('DATA', apiOk);

function apiOk(){
  return axios
        .get('http://jsonplaceholder.typicode.com/posts')
        .then((data) => data);
}