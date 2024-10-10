import React from 'react';
import { Routes, Route } from 'react-router-dom'; 
import ProfitLossPage from './Component/ProfitLossPage'; 
import TransactionList from './Component/TransactionList';
import TransactionForm from './Component/TransactionForm';
import InsertRecord from './Component/InsertRecord'; 

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<TransactionList />} /> 
        <Route path="/transactions/profit-loss" element={<ProfitLossPage />} /> 
        <Route path="/transactions/add" element={<TransactionForm />} />
        <Route path="/transactions/add/add" element={<InsertRecord />} />
      </Routes>
    </div>
  );
}

export default App;
