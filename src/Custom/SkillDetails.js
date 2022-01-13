import React, { useState } from "react";
import CustomCard from "./CustomCard";
import Table from "./Table";
import { useNavigate } from "react-router-dom";

function SkillDetails(props) {
  let history = useNavigate();
  const handleSkillsBack = () => {
    history("../projects");
  };
  const handleSkillsNext = () => {
    history("../education");
  };
  const [items, setItems] = useState(props && props.skills);
  const handleItems = (item) => {
    setItems([...items, item]);
    props.handleSkillsNext([...items, item]);
  };
  const handleEditItem = (item) => {
    let result = items.map((skill, index) => {
      if (skill.id === item.id) {
        skill.name = item.name;
      }
      return skill;
    });
    console.log("result", result);
    setItems(result);
    props.handleSkillsNext(result);
  };
  const handleDeleteItem = (item) => {
    console.log(item);
    let result =
      items.length > 0 &&
      items.filter((skill, index) => {
        return skill.id !== item.id;
      });
    setItems(result);
    props.handleSkillsNext(result);
  };
  return (
    <CustomCard>
      <h5>Enter your Skills details</h5>
      <Table
        items={items}
        handleItems={handleItems}
        handleEdit={handleEditItem}
        handleDelete={handleDeleteItem}
      />
      <footer>
        <button className="capital btn_back" onClick={handleSkillsBack}>
          Back
        </button>
        <button className="capital btn_next" onClick={handleSkillsNext}>
          Next
        </button>
      </footer>
    </CustomCard>
  );
}

export default SkillDetails;
