import React from 'react';
import Addproduct from './Components/Addproduct';
import Showproduct from './Components/Showproduct';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Editproduct from './Components/Editproduct';

function App() {
  return (
    <BrowserRouter>
    <div className='container'>
      <Routes>
        <Route path='/' element={<Showproduct />}/>
        <Route path='add' element={<Addproduct />}/>
        <Route path='edit/:id' element={<Editproduct />}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
