import React, { useState, useEffect } from 'react';
import { Link, Route, Redirect } from 'react-router-dom';
import Pizza from './components/Pizza'

const App = () => {
  return (
    <>
      <h1>Lambda Eats</h1>
        <Link to='/pizza'>Pizza</Link>
        <Route path='/pizza'>
          <Pizza />
        </Route>
    </>
  );
};
export default App;
