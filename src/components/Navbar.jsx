import { useContext } from "react";
import { BudgetContext } from "../context/BudgetContext";

function Navbar() {
  const { budgetMode, setBudgetMode } = useContext(BudgetContext);

  const toggleBudget = () => {
    setBudgetMode(!budgetMode);
  };

  return (
    <nav>
      <button onClick={toggleBudget}>
        {budgetMode ? "Disattiva Modalità Budget" : "Attiva Modalità Budget"}
      </button>
    </nav>
  );
}

export default Navbar;