import { Paper } from "@material-ui/core";
import React from "react";
import CustomCard from "../Custom/CustomCard";
import { useNavigate } from "react-router-dom";

function UploadPhoto() {
  let history = useNavigate();
  const handleUploadBack = () => {
    history("../bio");
  };
  const handleUploadNext = () => {
    history("../projects");
  };
  return (
    <div>
      <CustomCard>
        <h6>Uppload your photos</h6>
        <div className="flex_col">
          <div className="flex">
            <div className="photo_paper remove">
              <span>X</span>
            </div>
            <div className="photo_paper remove">
              <span>X</span>
            </div>
          </div>
          <div className="flex">
            <div className="photo_paper add">
              <span>+</span>
            </div>
            <div className="photo_paper add">
              <span>+</span>
            </div>
          </div>
        </div>

        <footer
        // className="category_footer"
        >
          <button className="capital btn_back" onClick={handleUploadBack}>
            Back
          </button>
          <button className="capital btn_next" onClick={handleUploadNext}>
            Next
          </button>
        </footer>
      </CustomCard>
    </div>
  );
}

export default UploadPhoto;
