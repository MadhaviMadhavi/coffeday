import React, { useState } from "react";
import CustomCard from "./CustomCard";
import Table from "./Table";
import { useNavigate } from "react-router-dom";
function ProjectDetails(props) {
  let history = useNavigate();
  const handleProjectBack = () => {
    history("../photos");
  };
  const handleProjectNext = () => {
    history("../skills");
  };
  const [items, setItems] = useState(props && props.projects);
  const handleProjects = (item) => {
    setItems([...items, item]);
    props.handleProjects([...items, item]);
  };
  const handleEditProject = (item) => {
    let result = items.map((project, index) => {
      if (project.id === item.id) {
        project.name = item.name;
      }
      return project;
    });
    console.log("result", result);
    setItems(result);
    props.handleProjects(result);
  };
  const handleDeleteItem = (item) => {
    console.log(item);
    let result =
      items.length > 0 &&
      items.filter((project, index) => {
        return project.id !== item.id;
      });
    setItems(result);
    props.handleProjects(result);
  };
  return (
    <CustomCard>
      <h5>Enter your Project details</h5>
      <Table
        items={items}
        handleItems={handleProjects}
        handleEdit={handleEditProject}
        handleDelete={handleDeleteItem}
      />
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
