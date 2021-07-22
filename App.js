import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import './App.css';
import Header from './header';
import Home from './home';

function App() {
  return (
    <HashRouter>
      <Header/>
        <Route exact path ="/" component={Home}/>
    </HashRouter>
  );
}

export default App;
