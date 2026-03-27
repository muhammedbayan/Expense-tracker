import React, { useState } from 'react'
import { IoIosArrowBack } from "react-icons/io";

export const TransactionForm = ({ setIsOpen , setTransactions ,transactions}) => {
    const today = new Date().toISOString().split("T")[0];
    const [formData,setFormData] = useState({date: today,
                                             type:"expense",
                                             amount:"",
                                             category:""
    })
    const handleChange = (e) =>{
        const {name , value} = e.target;
        setFormData((prev) => ({...prev,[name]:value}));
    }
    const handleSubmit = () =>{
        const newAmount = Number(formData.amount);
        if(formData.amount == 0){
            alert("enter an amount!");
            return;
        }
        else if(formData.category.slice()===""){
            alert("enter your transaction catogary");
            return;
        }
        const totalIncome = transactions.filter( txn => txn.type === "income").reduce((acc , txn) => acc+ Number(txn.amount) ,0);
        const totalExpense = transactions.filter( txn => txn.type === "expense").reduce((acc , txn) => acc+ Number(txn.amount) ,0);
        if(formData.type === "expense" && totalExpense + newAmount > totalIncome){
            alert("Expense cannot be greater than income!");
            return;
        }
        const newTransaction = {
            id: Date.now(),
            date: formData.date,
            type: formData.type,
            amount: formData.amount,
            category: formData.category,
        }
        setTransactions((prev) => [...prev,newTransaction]);
        setFormData({date:"",
            type:"expense",
            amount:"",
            category:""
        });
        setIsOpen(false);
    }
  return (
    
    <div className="opacity-100 md:ml-73 w-80 md:w-130 bg-white p-4 md:p-8 rounded-3xl fixed top-29 m-2 border border-gray-700">
        <div className='flex items-center mb-5'>
            <IoIosArrowBack onClick={()=>setIsOpen(false)} className='w-10 h-10 p-2 bg-neutral-100 rounded-xl cursor-pointer'/>
            <h1 className='text-center w-full text-xl font-bold'>Add Transaction</h1>
        </div>
        <form>
            <div className='flex items-center justify-between md:justify-around mb-5'>
                <label className='cursor-pointer flex items-center'>
                    <input className=' appearance-none border border-gray-400 w-5 h-5 rounded-full mr-2 checked:bg-purple-500'
                    onChange={handleChange} value="income" checked={formData.type == "income"} type="radio" name='type'/>
                    <span className='text-2xl'>Income</span>
                </label>
                <label className='cursor-pointer flex items-center'>
                    <input className='appearance-none border border-gray-400 w-5 h-5 rounded-full mr-2 checked:bg-purple-500' 
                    onChange={handleChange} value="expense" checked={formData.type == "expense"} type="radio" name='type'/>
                    <span className='text-2xl'>Expense</span>
                </label>
            </div>
            <div className='space-y-5'>
                <div className='flex flex-col'>
                    <label htmlFor="">Date</label>
                    <input type="date" value={formData.date} onChange={handleChange} name='date' placeholder='00/00/00' className='w-full p-2 border-2 border-gray-400 rounded-xl'/>
                </div>
                <div className='flex flex-col'>
                    <label htmlFor="">Amount</label>
                    <input type="number" value={formData.amount} onChange={handleChange} name='amount' placeholder='0' className='w-full p-2 border-2 border-gray-400 rounded-xl'/>
                </div>
                <div className='flex flex-col'>
                    <label htmlFor="">Cateogry</label>
                    <input type="text" value={formData.category} onChange={handleChange} name='category' className='w-full p-2 border-2 border-gray-400 rounded-xl'/>
                </div>
                <div>
                    <div onClick={handleSubmit} className='w-full text-xl flex items-center justify-center bg-sky-400 cursor-pointer text-white py-3 rounded-xl font-bold'>Submit</div>
                </div>
            </div>
            
        </form>
    </div>
  )
}
