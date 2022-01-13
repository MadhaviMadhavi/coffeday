import React, { useState } from "react";
import CustomCard from "./CustomCard";
import Table from "./Table";
import { useNavigate } from "react-router-dom";
function ProjectDetails(props) {
  let history = useNavigate();
  const handleEducationBack = () => {
    history("../skills");
  };
  const handleEducationNext = () => {
    history("../saveDetails");
  };
  const [items, setItems] = useState(props && props.education);
  const handleItems = (item) => {
    setItems([...items, item]);
    props.handleEducationNext([...items, item]);
  };
  const handleEditItem = (item) => {
    let result = items.map((edu, index) => {
      if (edu.id === item.id) {
        edu.name = item.name;
      }
      return edu;
    });
    console.log("result", result);
    setItems(result);
    props.handleEducationNext(result);
  };
  const handleDeleteItem = (item) => {
    console.log(item);
    let result =
      items.length > 0 &&
      items.filter((edu, index) => {
        return edu.id !== item.id;
      });
    setItems(result);
    props.handleEducationNext(result);
  };
  return (
    <CustomCard>
      <h5>Enter your Educational details</h5>
      <Table
        items={items}
        handleItems={handleItems}
        handleEdit={handleEditItem}
        handleDelete={handleDeleteItem}
      />
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
