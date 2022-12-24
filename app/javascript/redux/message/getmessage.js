import { createAsyncThunk } from '@reduxjs/toolkit';

// API

const baseApi = 'http://127.0.0.1:3000/api/v1/message';
const GET_MESSAGE = 'hello-rails-react/message/GET_MESSAGE'

const initialState = 'hello mark';

export const fetchMessage = createAsyncThunk(GET_MESSAGE, async () => {
  const response = await fetch(baseApi , {
    method: 'GET',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
    },
  }
);
 
  const messageList = await response.data.message;
  
  return messageList;
});
// create action types



const greetingReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case `${GET_MESSAGE}/fulfilled`:
      return action.payload.message;
    default:
      return state;
  }
};
  
  export default greetingReducer;