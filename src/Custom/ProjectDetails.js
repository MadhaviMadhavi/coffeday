import React from "react";
import CustomCard from "./CustomCard";

function ProjectDetails() {
  return (
    <CustomCard>
      <h5>Enter your project details</h5>
      <footer
      // className="category_footer"
      >
        <button className="capital btn_back">Back</button>
        <button className="capital btn_next">Next</button>
      </footer>
    </CustomCard>
  );
}

export default ProjectDetails;
