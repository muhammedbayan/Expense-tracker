import React, { useState } from 'react'
import { FaPlus } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";



export const TransactionList = ({ setIsOpen , transactions , setTransactions}) => {
    const invertDate = (dateStr) =>{
        if(!dateStr) return "";
        return dateStr.split("-").reverse().join("-");
    }
    const handleDelBtn = (id) =>{
        const FilterTransactions = transactions.filter((tx)=>tx.id !== id);
        setTransactions(FilterTransactions);
    }
  return (
    <div>
        <div className='mt-9 mb-5 flex items-center justify-between'>
            <h1 className='text-2xl font-medium tracking-wide'>Transactions</h1>
            <FaPlus onClick={()=>setIsOpen(true)} className=' bg-purple-600 text-white w-12 h-12 p-2 cursor-pointer rounded-full'/>
        </div>
        {transactions.length == 0 ? <p className='text-center mt-10 text-2xl text-gray-500'>No Transactions yet</p> : <div></div>}
        <ul className='space-y-3 pb-5'>
            {transactions.map((tx)=>(
                <li key={tx.id} className='w-full py-3 px-7 flex items-center justify-between rounded-2xl bg-white'>
                    <div className='flex-1'>
                        <p className='font-bold '>{tx.category}</p>
                        <div className='text-neutral-500'>{invertDate(tx.date)}</div>
                    </div>
                    <div className={`${tx.type == "income" ? 'text-green-600 text-xl font-extrabold tracking-wide' : 'text-red-600 text-xl font-extrabold tracking-wide'} `}>
                        {tx.type == "income" ? "+ ₹" : "- ₹"}{tx.amount}
                    </div>
                    <div>
                        <MdDelete onClick={()=>handleDelBtn(tx.id)} className='ml-3 cursor-pointer w-10 h-10 p-2 hover:bg-neutral-100 rounded-full'/>
                    </div>
                </li>
            ))}
        </ul>
    </div>
  )
}
