import React, { useState, useEffect } from 'react';
import { Link, Route, Redirect } from 'react-router-dom';
import Pizza from './components/Pizza'
import './App.css'

const App = () => {
  return (
    <>
      <div className='App-header'>
      <h1>Lambda Eats</h1>
        <Link className='App-link' to='/'>Home</Link>
        <br></br>
        <Link className='App-link' to='/pizza'>Pizza</Link>
        <Route exact path='/'>
          <Redirect to='/' />
        </Route>
      </div>
        <Route exact path='/pizza'>
          <Pizza />
        </Route>
    </>
  );
};
export default App;
