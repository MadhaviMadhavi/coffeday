import React from "react";
import CustomCard from "./CustomCard";
import Table from "./Table";
import { useNavigate } from "react-router-dom";
function ProjectDetails() {
  let history = useNavigate();
  const handleEducationBack = () => {
    history("../skills");
  };
  const handleEducationNext = () => {
    history("../saveDetails");
  };
  return (
    <CustomCard>
      <h5>Enter your Educational details</h5>
      <Table />
      <footer>
        <button className="capital btn_back" onClick={handleEducationBack}>
          Back
        </button>
        <button className="capital btn_next" onClick={handleEducationNext}>
          Submit and Proceed
        </button>
      </footer>
    </CustomCard>
  );
}

export default ProjectDetails;
