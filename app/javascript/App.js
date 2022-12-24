import { Routes, Route } from 'react-router-dom';
import Message from './components/message'
import React from 'react';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Message />} />
      </Routes>
    </>
  );
}

export default App;