import React from "react";
import { AiOutlineFileSearch } from "react-icons/ai";
import { BsGraphUp } from "react-icons/bs";
import { GiDeathNote, GiHumanPyramid } from "react-icons/gi";
import { MdDeveloperMode } from "react-icons/md";
import { FaRegHandshake } from "react-icons/fa";
import { AiOutlineCalculator } from "react-icons/ai";
import { MdOutlineDevicesOther } from "react-icons/md";
import CustomCard from "../Custom/CustomCard";

function Category(props) {
  return <CustomCard>{<CategoryBody props={props} />}</CustomCard>;
}
function CategoryBody(props) {
  return (
    <main className="cat_main">
      <header>Choose a category</header>
      <section className="cat_section">
        <div className="flex">
          <div>
            <MdDeveloperMode className="icon" />
            <div className="font_10">Developer</div>
          </div>
          <div>
            <GiDeathNote className="icon" />
            <div className="font_10">Designer</div>
          </div>
          <div>
            <AiOutlineFileSearch className="icon" />
            <div className="font_10">Testing</div>
          </div>
          <div>
            <BsGraphUp className="icon" />
            <div className="font_10">Marketing</div>
          </div>
        </div>
        <div className="flex">
          <div>
            <GiHumanPyramid className="icon" />
            <div className="font_10">Recruitment</div>
          </div>
          <div>
            <FaRegHandshake className="icon" />
            <div className="font_10">Sales</div>
          </div>
          <div>
            <AiOutlineCalculator className="icon" />
            <div className="font_10">Accountant</div>
          </div>
          <div>
            <MdOutlineDevicesOther className="icon" />
            <div className="font_10">Other</div>
          </div>
        </div>
      </section>
      <footer
      // className="category_footer"
      >
        <button className="capital btn_back">Back</button>
        <button className="capital btn_next">Next</button>
      </footer>
    </main>
  );
}
export default Category;
