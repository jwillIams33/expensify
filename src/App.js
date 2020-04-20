import React from 'react';
import Header from './components/Header';
import GrandBalance from './components/GrandBalance';
import Accounts from './components/Accounts';
import { allAccounts }from './data/TotalBalance';

import './App.css';

function App() {
  return (
    <div>
      <Header />
      <GrandBalance />
      <Accounts accounts ={allAccounts} />
        
    </div>
  );
}

export default App;