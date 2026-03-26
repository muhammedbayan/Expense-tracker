import React, { useEffect, useState } from 'react'
import { Navbar } from './Components/Navbar'
import { Dashboard } from './Components/Dashboard'
import { TransactionList } from './Components/TransactionList'
import { TransactionForm } from './Components/TransactionForm'

const App = () => {
  const [transactions,setTransactions] = useState(()=> {
    const savedTransactions = localStorage.getItem("transactions")
    if(savedTransactions){
      return JSON.parse(savedTransactions);
    }else{
      return [];
    }
  });
  const [isOpen,setIsOpen] = useState(false);

  useEffect(()=> {
    localStorage.setItem("transactions",JSON.stringify(transactions))
  }, [transactions]);
  return (
    <div className='md:px-30 px-5 w-full min-h-screen bg-gray-100'>
      <Navbar />
      <Dashboard transactions={transactions}/>
      <TransactionList setIsOpen={setIsOpen} isOpen={isOpen} transactions={transactions} setTransactions= {setTransactions}/>
      {isOpen && <TransactionForm transactions={transactions} setIsOpen={setIsOpen} setTransactions = {setTransactions}/>}
    </div>
  )
}

export default App