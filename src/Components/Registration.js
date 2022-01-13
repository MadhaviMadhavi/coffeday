import React, { useState } from "react";
import Create from "../Custom/Create";
import Verify from "../Custom/Verify";
import Category from "../Custom/Category";
import Subcategory from "../Custom/Subcategory";
import Bio from "../Custom/Bio";
import UploadPhoto from "../Custom/UploadPhoto";
import ProjectDetails from "../Custom/ProjectDetails";
import EducationalDetails from "../Custom/EducationalDetails";
import SkillDetails from "../Custom/SkillDetails";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FinalSave from "../Custom/FinalSave";
import NotFoundPage from "../Custom/NotFoundPage";
function Registration() {
  const [categories, setCategories] = useState({});
  const [subCategories, setSubCategories] = useState({});
  const [bio, setBio] = useState(false);
  const [photo, setPhoto] = useState(false);
  const [projects, setProjects] = useState([]);
  const [skills, setSkills] = useState([]);
  const [education, setEducation] = useState([]);
  const [finalObject, setFinalObject] = useState({
    categories: {},
    subCategories: {},
    bio: {},
    photos: {},
    project: [],
    skills: [],
    education: [],
  });

  const handleCategoryNext = (items) => {
    console.log(items);
    setCategories(items);
  };
  const handleSubCategoryNext = (items) => {
    console.log(items);
    setSubCategories(items);
  };
  const handleProjectsNext = (items) => {
    setProjects(items);
  };
  const handleSkillsNext = (items) => {
    setSkills(items);
  };
  const handleEducationNext = (items) => {
    setEducation(items);
  };
  const handleFinalSubmit = () => {
    setCategories({});
    setSubCategories({});
    setProjects([]);
    setSkills([]);
    setEducation([]);
  };
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Create />}></Route>
        <Route exact path="/verify" element={<Verify />}></Route>
        <Route
          exact
          path="/category"
          element={
            <Category
              handleCategoryNext={handleCategoryNext}
              categories={categories}
            />
          }
        ></Route>
        <Route
          exact
          path="/subcategory"
          element={
            <Subcategory
              handleSubCategoryNext={handleSubCategoryNext}
              subCategories={subCategories}
            />
          }
        ></Route>
        <Route exact path="/bio" element={<Bio />}></Route>
        <Route exact path="/photos" element={<UploadPhoto />}></Route>
        <Route
          exact
          path="/projects"
          element={
            <ProjectDetails
              projects={projects}
              handleProjects={handleProjectsNext}
            />
          }
        ></Route>
        <Route
          exact
          path="/skills"
          element={
            <SkillDetails skills={skills} handleSkillsNext={handleSkillsNext} />
          }
        ></Route>
        <Route
          exact
          path="/education"
          element={
            <EducationalDetails
              education={education}
              handleEducationNext={handleEducationNext}
            />
          }
        ></Route>
        <Route
          exact
          path="/saveDetails"
          element={<FinalSave handleFinalSubmit={handleFinalSubmit} />}
        ></Route>
        <Route path="/*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
    // <div>
    //   <div>
    //     {createPage ? (
    //       <Create
    //         phone={phone}
    //         handlePhone={handlePhone}
    //         handleSendOtp={handleSendOtp}
    //       />
    //     ) : (
    //       ""
    //     )}

    //     {sendOtp ? (
    //       <Verify
    //         phone={phone}
    //         otpVerify={otpVerify}
    //         handleVerifyOtp={handleVerifyOtp}
    //         handleResendOtp={handleResendOtp}
    //       />
    //     ) : (
    //       ""
    //     )}
    //     {otpVerify ? (
    //       <Category
    //         // handleCategoryBack={handleCategoryBack}
    //         // handleCategoryNext={handleCategoryNext}
    //       />
    //     ) : (
    //       ""
    //     )}
    // {/* <Subcategory />
    // <Bio />
    // <UploadPhoto />
    // <ProjectDetails />
    // <EducationalDetails />
    // <SkillDetails /> */}
    //   </div>
    // </div>
  );
}

export default Registration;
