import './App.css';
import React, {useEffect, useState} from 'react';
import Educ from './Educ';
import Exper from './Exper';
import LandPage from './landPage';
import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from './ThemeContext';

function App() {

  return (
    <div className='App'>
      <ThemeProvider>
        <Routes>
          <Route path='/' element={<LandPage />}></Route>
          <Route path='/education' element={<Educ />}></Route>
          <Route path='/experience' element={<Exper />}></Route>
        </Routes>
      </ThemeProvider>
    </div>
  );
}

export default App;
