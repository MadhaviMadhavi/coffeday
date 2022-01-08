import React from "react";
import { FaJava } from "react-icons/fa";
import { SiPython, SiScala, SiPhp, SiNodedotjs } from "react-icons/si";
import { BsBatteryFull } from "react-icons/bs";
import { DiDotnet } from "react-icons/di";
import { MdOutlineDevicesOther } from "react-icons/md";
import CustomCard from "./CustomCard";
import { useNavigate } from "react-router-dom";
function Subcategory(props) {
  return <CustomCard>{SubcategoryBody(props)}</CustomCard>;
}
function SubcategoryBody(props) {
  let history = useNavigate();
  const handleSubCategoryBack = () => {
    history("../category");
  };
  const handleSubCategoryNext = () => {
    history("../bio");
  };
  return (
    <main className="cat_main">
      <header>
        <div>Choose sub category</div>
      </header>
      <section className="cat_section">
        <div className="flex">
          <div>
            <BsBatteryFull className="icon" />
            <div className="font_10">Fullstack</div>
          </div>
          <div>
            <SiPython className="icon" />
            <div className="font_10">Python</div>
          </div>
          <div>
            <SiPhp className="icon" />
            <div className="font_10">PHP</div>
          </div>
          <div>
            <DiDotnet className="icon" />
            <div className="font_10">.NET</div>
          </div>
        </div>
        <div className="flex">
          <div>
            <FaJava className="icon" />
            <div className="font_10">Java</div>
          </div>
          <div>
            <SiScala className="icon" />
            <div className="font_10">Scala</div>
          </div>
          <div>
            <SiNodedotjs className="icon" />
            <div className="font_10">Node JS</div>
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
        <button className="capital btn_back" onClick={handleSubCategoryBack}>
          Back
        </button>
        <button className="capital btn_next" onClick={handleSubCategoryNext}>
          Next
        </button>
      </footer>
    </main>
  );
}

export default Subcategory;
