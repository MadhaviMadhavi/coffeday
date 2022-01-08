import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Create from "../Custom/Create";
import Verify from "../Custom/Verify";
import Category from "../Custom/Category";
import Subcategory from "../Custom/Subcategory";
import Bio from "../Custom/Bio";
import UploadPhoto from "../Custom/UploadPhoto";
import ProjectDetails from "../Custom/ProjectDetails";
import EducationalDetails from "../Custom/EducationalDetails";
import SkillDetails from "../Custom/SkillDetails";

function AppRouter() {
  return (
    <div>
      <BrowserRouter>
        <Route exact path="/" component={Create}></Route>
        <Route exact path="/verficication" component={Verify}></Route>
        <Route exact path="/category" component={Category}></Route>
        <Route exact path="/subcategory" component={Subcategory}></Route>
        <Route exact path="/bio" component={Bio}></Route>
        <Route exact path="/photos" component={UploadPhoto}></Route>
        <Route exact path="/projects" component={ProjectDetails}></Route>
        <Route exact path="/skills" component={SkillDetails}></Route>
        <Route exact path="/education" component={EducationalDetails}></Route>
      </BrowserRouter>
    </div>
  );
}

export default AppRouter;
