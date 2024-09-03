import React, { useState } from "react";

function App() {
  const [input, setInput] = useState("");
  const [amount, setAmount] = useState("");
  const [expenses, setExpenses] = useState([]);

  const addExpense = () => {
    if (!input || !amount) return;
    const newExpense = {
      id: expenses.length + 1,
      title: input,
      amount: amount,
    };

    setExpenses([...expenses, newExpense]);
    setInput("");
    setAmount("");
  };

  const deleteExpense = (id) => {
    setExpenses(expenses.filter((expense) => expense.id !== id));
  };

  return (
    <>
      <div className="main bg-gray-200 border-2 border-solid border-black h-screen w-full flex justify-center items-center ">
        <div className=" flex justify-center items-center flex-col ">
          <h1 className="w-34 my-8 p-3 font-semibold flex justify-center  bg-purple-500 rounded-md ">
            Expense Tracker
          </h1>
          <input
            type="text"
            value={input}
            placeholder="Expense"
            onChange={(e) => setInput(e.target.value)}
            className="border-2 border-solid border-black rounded-md mt-2 px-4"
          />
          <input
            type="number"
            value={amount}
            placeholder="Amount"
            onChange={(e) => setAmount(e.target.value)}
            className="border-2 border-solid border-black rounded-md mt-2 px-4"
          />
          <button onClick={addExpense} className="bg-purple-500 px-3 rounded-md font-semibold py-1 mt-4">Add Expense</button>
          <ul className="expense-list w-full">
            {expenses.map((expense) => (
              <li key={expense.id} className="bg-white border-2 border-solid border-black rounded-md flex w-full py-2 mt-2 justify-around"> 
                <span>{expense.title}</span>
                <span>${expense.amount}</span>
                <button className="bg-red-500 px-2 py-1 rounded-md" onClick={() => deleteExpense(expense.id)}>
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;
