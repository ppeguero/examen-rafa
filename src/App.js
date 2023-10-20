import React, {useState} from 'react'
import Album from './Pages/Album/Album.js'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Album/>}></Route>
      </Routes> 
    </BrowserRouter>
  );
}

export default App;
