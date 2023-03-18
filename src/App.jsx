import { useState } from 'react';
// stylesheet
import './App.css'

// react router dom
import { BrowserRouter,Route,Routes } from 'react-router-dom';

// pages
import InitialPage from './pages/InitialPage';
import Result from './pages/Result';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<InitialPage/>}/>
        </Routes>
        <Routes>
          <Route path='/result' element={<Result/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
