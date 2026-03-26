import React from 'react'
import { BsThreeDots } from "react-icons/bs";
import { FaArrowUp } from "react-icons/fa6";
import { FaArrowDown } from "react-icons/fa6";
// bg-linear-to-tr from-purple-500 to-pink-600
export const Dashboard = ( {transactions} ) => {
    const totalIncome = transactions.filter( txn => txn.type === "income").reduce((acc , txn) => acc+ Number(txn.amount) ,0);
    const totalExpense = transactions.filter( txn => txn.type === "expense").reduce((acc , txn) => acc+ Number(txn.amount) ,0)
    const balance = totalIncome - totalExpense;
  return (
    <div className='w-full p-5 md:px-15 md:py-10 bg-linear-to-bl from-indigo-500 via-fuchsia-500 to-rose-400 rounded-3xl'>
        <div className='flex'>
            <div className='flex items-center justify-center flex-col w-full'>
                <h1 className='text-white font-medium text-xl mb-2'>Total Balance</h1>
                <div className='text-white font-extrabold text-3xl md:text-5xl'>₹ {balance}</div>
            </div>
            <BsThreeDots className='cursor-pointer flex items-center justify-center text-4xl text-white'/>
        </div>
        <div className='flex items-center justify-between mt-8 md:mt-15'>
            <div className='flex items-center gap-4'>
                <FaArrowDown className='p-2 text-4xl text-green-600 rounded-full bg-white/10 backdrop-filter backdrop-blur-3xl'/>
                <div>
                    <h1 className='text-white font-sans font-medium md:text-xl'>Income</h1>
                    <div className='text-white font-sans font-semibold text-xl md:text-3xl md:mt-1'>₹ {totalIncome} </div>
                </div>
            </div>
            <div className='flex items-center gap-4'> 
                <FaArrowUp className='p-2 text-4xl text-red-600 rounded-full bg-white/10 backdrop-filter backdrop-blur-3xl'/>
                <div>
                    <h1 className='text-white font-sans font-medium md:text-xl'>Expense</h1>
                    <div className='text-white font-sans font-semibold text-xl md:text-3xl md:mt-1'>₹ {totalExpense}</div>
                </div>
            </div>
        </div>
    </div>
  )
}
