import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMessage } from '../redux/message/getmessage';

const Message = () => {
  const message = useSelector((state) => state.greetings);
  const dispatch = useDispatch();

  useEffect(() => { dispatch(fetchMessage())}, []);

  return (
    <div>
      <h1>{message}</h1>
    </div>
  );
};

export default Message;