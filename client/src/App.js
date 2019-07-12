import React from 'react';
import { Route } from 'react-router-dom';
import './styles/App.css';

import Account from './account';

function App() {
  return (
    <div className="App">
      Hello there world
        <Route path="/account" component={Account} />
    </div>
  );
}

export default App;
