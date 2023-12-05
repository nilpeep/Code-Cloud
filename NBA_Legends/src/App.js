import Header from "./components/Header";
import CardContainer from "./components/CardContainer";
import { useState } from "react";
import "../src/App.css"

function App() {
  const [filteredValue, setFilteredValue] = useState("");

  const handleFilter = (value)=> {
      setFilteredValue(value);
  }

  return (
    <div>
      <Header onFilterChange={handleFilter}/>
      <CardContainer filteredValue={filteredValue}/>
    </div>
  )
}

export default App
