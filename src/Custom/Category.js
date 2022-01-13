import React, { useState } from "react";
import { AiOutlineFileSearch } from "react-icons/ai";
import { BsGraphUp } from "react-icons/bs";
import { GiDeathNote, GiHumanPyramid } from "react-icons/gi";
import { MdDeveloperMode } from "react-icons/md";
import { FaRegHandshake } from "react-icons/fa";
import { AiOutlineCalculator } from "react-icons/ai";
import { MdOutlineDevicesOther } from "react-icons/md";
import CustomCard from "../Custom/CustomCard";
import { useLocation, useNavigate } from "react-router-dom";

function Category(props) {
  return <CustomCard>{CategoryBody(props)}</CustomCard>;
}
function CategoryBody(props) {
  let history = useNavigate();

  const [categories, setCategories] = useState({
    dev: props.categories ? props.categories.dev : false,
    designer: props.categories ? props.categories.designer : false,
    testing: props.categories ? props.categories.testing : false,
    marketing: props.categories ? props.categories.marketing : false,
    recruitment: props.categories ? props.categories.recruitment : false,
    sales: props.categories ? props.categories.sales : false,
    accountant: props.categories ? props.categories.accountant : false,
    others: props.categories ? props.categories.others : false,
  });
  const handleCategoryBack = () => {
    history("../verify");
  };
  const handleCategoryNext = () => {
    props.handleCategoryNext(categories);
    history("../subcategory", { state: categories });
  };
  return (
    <main className="cat_main">
      <header>Choose a category</header>
      <section className="cat_section">
        <div className="flex">
          <div>
            <MdDeveloperMode
              className={categories.dev ? "icon_selected" : "icon"}
              onClick={() =>
                setCategories({ ...categories, dev: !categories.dev })
              }
            />
            <div className="font_10">Developer</div>
          </div>
          <div>
            <GiDeathNote
              className={categories.designer ? "icon_selected" : "icon"}
              onClick={() =>
                setCategories({ ...categories, designer: !categories.designer })
              }
            />
            <div className="font_10">Designer</div>
          </div>
          <div>
            <AiOutlineFileSearch
              className={categories.testing ? "icon_selected" : "icon"}
              onClick={() =>
                setCategories({ ...categories, testing: !categories.testing })
              }
            />
            <div className="font_10">Testing</div>
          </div>
          <div>
            <BsGraphUp
              className={categories.marketing ? "icon_selected" : "icon"}
              onClick={() =>
                setCategories({
                  ...categories,
                  marketing: !categories.marketing,
                })
              }
            />
            <div className="font_10">Marketing</div>
          </div>
        </div>
        <div className="flex">
          <div>
            <GiHumanPyramid
              className={categories.recruitment ? "icon_selected" : "icon"}
              onClick={() =>
                setCategories({
                  ...categories,
                  recruitment: !categories.recruitment,
                })
              }
            />
            <div className="font_10">Recruitment</div>
          </div>
          <div>
            <FaRegHandshake
              className={categories.sales ? "icon_selected" : "icon"}
              onClick={() =>
                setCategories({ ...categories, sales: !categories.sales })
              }
            />
            <div className="font_10">Sales</div>
          </div>
          <div>
            <AiOutlineCalculator
              className={categories.accountant ? "icon_selected" : "icon"}
              onClick={() =>
                setCategories({
                  ...categories,
                  accountant: !categories.accountant,
                })
              }
            />
            <div className="font_10">Accountant</div>
          </div>
          <div>
            <MdOutlineDevicesOther
              className={categories.others ? "icon_selected" : "icon"}
              onClick={() =>
                setCategories({ ...categories, others: !categories.others })
              }
            />
            <div className="font_10">Other</div>
          </div>
        </div>
      </section>
      <footer
      // className="category_footer"
      >
        <button className="capital btn_back" onClick={handleCategoryBack}>
          Back
        </button>
        <button className="capital btn_next" onClick={handleCategoryNext}>
          Next
        </button>
      </footer>
    </main>
  );
}
export default Category;
