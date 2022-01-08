import React from "react";
import CustomCard from "./CustomCard";
import Table from "./Table";
import { useNavigate } from "react-router-dom";

function ProjectDetails() {
  let history = useNavigate();
  const handleSkillsBack = () => {
    history("../projects");
  };
  const handleSkillsNext = () => {
    history("../education");
  };
  return (
    <CustomCard>
      <h5>Enter your Skills details</h5>
      <Table />
      <footer>
        <button className="capital btn_back" onClick={handleSkillsBack}>Back</button>
        <button className="capital btn_next" onClick={handleSkillsNext}>Next</button>
      </footer>
    </CustomCard>
  );
}

export default ProjectDetails;
