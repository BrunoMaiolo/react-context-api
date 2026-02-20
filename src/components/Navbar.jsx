import { useContext } from "react";
import { Link } from "react-router-dom";
import { BudgetContext } from "../context/BudgetContext";

function Navbar() {
  const { budgetMode, setBudgetMode } = useContext(BudgetContext);

  const toggleBudget = () => {
    setBudgetMode(!budgetMode);
  };

  return (
    <nav>
      {/* link navigazione */}
      <Link to="/">Home</Link> |{" "}
      <Link to="/products">Prodotti</Link> |{" "}
      <Link to="/about">About</Link>

      {/* bottone budget */}
      <div>
        <button onClick={toggleBudget}>
          {budgetMode ? "Disattiva Modalità Budget" : "Attiva Modalità Budget"}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;