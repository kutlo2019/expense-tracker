import Header from "./components/Header";
import Expenses from "./components/Expenses";
import Footer from "./components/Footer";
import AddExpense from "./components/AddExpense";
import { useState } from 'react'

function App() {

  const [ expenses, setExpenses ] = useState([
      {
        description: "Coffee",
        transType: "card",
        cost: 21.50,
        category: null,
        id: 1
      },
      {
        description: "Cab",
        transType: "cash",
        cost: 70.00,
        category: null,
        id: 2
      },
      {
        description: "Lunch",
        transType: "card",
        cost: 64.95,
        category: null,
        id: 3
      }
    ])
  const addExpense = (expense) => {
    setExpenses([...expenses, expense])
  }
  return (
    <div className="container p-3">
      <Header />
      <AddExpense onAdd={addExpense}/>
      <Expenses expenses={expenses}/>
      <Footer />
    </div>
  );
}

export default App;
