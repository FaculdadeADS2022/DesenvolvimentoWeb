import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { SignIn } from './Pages/SignIn';
import { Register } from './Pages/SignOut';

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SignIn/>} />
        <Route path='/Register' element={<Register/>} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;