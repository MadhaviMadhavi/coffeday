import React from "react";
import CustomCard from "./CustomCard";
import Table from "./Table";
import { useNavigate } from "react-router-dom";
function ProjectDetails() {
  let history = useNavigate();
  const handleProjectBack = () => {
    history("../photos");
  };
  const handleProjectNext = () => {
    history("../skills");
  };
  return (
    <CustomCard>
      <h5>Enter your Project details</h5>
      <Table />
      <footer>
        <button className="capital btn_back" onClick={handleProjectBack}>
          Back
        </button>
        <button className="capital btn_next" onClick={handleProjectNext}>
          Next
        </button>
      </footer>
    </CustomCard>
  );
}

export default ProjectDetails;
