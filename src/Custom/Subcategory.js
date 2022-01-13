import React, { useState } from "react";
import { FaJava } from "react-icons/fa";
import { SiPython, SiScala, SiPhp, SiNodedotjs } from "react-icons/si";
import { BsBatteryFull } from "react-icons/bs";
import { DiDotnet } from "react-icons/di";
import { MdOutlineDevicesOther } from "react-icons/md";
import CustomCard from "./CustomCard";
import { useLocation, useNavigate } from "react-router-dom";
function Subcategory(props) {
  return <CustomCard>{SubcategoryBody(props)}</CustomCard>;
}
function SubcategoryBody(props) {
  let history = useNavigate();
  const [subCategories, setSubCategories] = useState({
    fullstack: props.subCategories && props.subCategories.fullstack,
    python: props.subCategories && props.subCategories.python,
    php: props.subCategories && props.subCategories.php,
    net: props.subCategories && props.subCategories.net,
    java: props.subCategories && props.subCategories.java,
    node: props.subCategories && props.subCategories.node,
    scala: props.subCategories && props.subCategories.scala,
    other: props.subCategories && props.subCategories.other,
  });
  const handleSubCategoryBack = () => {
    history("../category");
  };
  const handleSubCategoryNext = () => {
    props.handleSubCategoryNext(subCategories);
    history("../bio", { state: subCategories });
  };
  return (
    <main className="cat_main">
      <header>
        <div>Choose sub category</div>
      </header>
      <section className="cat_section">
        <div className="flex">
          <div>
            <BsBatteryFull
              className={subCategories.fullstack ? "icon_selected" : "icon"}
              onClick={() =>
                setSubCategories({
                  ...subCategories,
                  fullstack: !subCategories.fullstack,
                })
              }
            />
            <div className="font_10">Fullstack</div>
          </div>
          <div>
            <SiPython
              className={subCategories.python ? "icon_selected" : "icon"}
              onClick={() =>
                setSubCategories({
                  ...subCategories,
                  python: !subCategories.python,
                })
              }
            />
            <div className="font_10">Python</div>
          </div>
          <div>
            <SiPhp
              className={subCategories.php ? "icon_selected" : "icon"}
              onClick={() =>
                setSubCategories({
                  ...subCategories,
                  php: !subCategories.php,
                })
              }
            />
            <div className="font_10">PHP</div>
          </div>
          <div>
            <DiDotnet
              className={subCategories.net ? "icon_selected" : "icon"}
              onClick={() =>
                setSubCategories({
                  ...subCategories,
                  net: !subCategories.net,
                })
              }
            />
            <div className="font_10">.NET</div>
          </div>
        </div>
        <div className="flex">
          <div>
            <FaJava
              className={subCategories.java ? "icon_selected" : "icon"}
              onClick={() =>
                setSubCategories({
                  ...subCategories,
                  java: !subCategories.java,
                })
              }
            />
            <div className="font_10">Java</div>
          </div>
          <div>
            <SiScala
              className={subCategories.scala ? "icon_selected" : "icon"}
              onClick={() =>
                setSubCategories({
                  ...subCategories,
                  scala: !subCategories.scala,
                })
              }
            />
            <div className="font_10">Scala</div>
          </div>
          <div>
            <SiNodedotjs
              className={subCategories.node ? "icon_selected" : "icon"}
              onClick={() =>
                setSubCategories({
                  ...subCategories,
                  node: !subCategories.node,
                })
              }
            />
            <div className="font_10">Node JS</div>
          </div>
          <div>
            <MdOutlineDevicesOther
              className={subCategories.other ? "icon_selected" : "icon"}
              onClick={() =>
                setSubCategories({
                  ...subCategories,
                  other: !subCategories.other,
                })
              }
            />
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
