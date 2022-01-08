import React from "react";
import CustomCard from "./CustomCard";
import { useNavigate } from "react-router-dom";

function FinalSave() {
  let history = useNavigate();

  const handleBackHome = () => {
    history("../");
  };
  return (
    <CustomCard>
      <h5>Congratulations!</h5>
      <h5>Your account is ready </h5>

      <footer>
        <button className="capital btn_next" onClick={handleBackHome}>
          Go HOME
        </button>
      </footer>
    </CustomCard>
  );
}

export default FinalSave;
