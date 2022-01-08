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
  const [createPage, setCreatePage] = useState(true);
  const [phone, setPhone] = useState("");
  const [sendOtp, setSendOtp] = useState(false);
  const [resendOtp, setResendOtp] = useState(false);
  const [otpVerify, setOtpVerify] = useState(false);

  const [category, setCategory] = useState(false);
  const [catBack, setCatBack] = useState(false);
  const [catNext, setCatNext] = useState(false);

  const [subCategory, setSubCategory] = useState(false);
  const [subcatBack, setSubCatBack] = useState(false);
  const [subcatNext, setSubCatNext] = useState(false);

  const [bio, setBio] = useState(false);
  const [bioBack, setBioBack] = useState(false);
  const [bioNext, setBioNext] = useState(false);

  const [photo, setPhoto] = useState(false);
  const [photoBack, setPhotoBack] = useState(false);
  const [photoNext, setPhotoNext] = useState(false);

  const [project, setProject] = useState(false);
  const [projectBack, setProjectBack] = useState(false);
  const [projectNext, setProjectNext] = useState(false);

  const [skill, setSkill] = useState(false);
  const [skillBack, setSkillBack] = useState(false);
  const [skillNext, setSkillNext] = useState(false);

  const [edu, setEdu] = useState(false);
  const [eduBack, setEduBack] = useState(false);
  const [eduNext, setEduNext] = useState(false);

  const handlePhone = (ph) => {
    setPhone(ph);
    console.log(ph);
  };
  const handleSendOtp = () => {
    setSendOtp(!sendOtp);
    setCreatePage(false);
    console.log("resending otp");
  };
  const handleResendOtp = () => {
    console.log("resend the otp");
    setResendOtp(!resendOtp);
    setCreatePage(false);
  };
  const handleVerifyOtp = () => {
    setOtpVerify(!otpVerify);
    setSendOtp(false);
    setCreatePage(false);
  };
  const handleCategoryBack = () => {
    //setSendOtp(false);
    setOtpVerify(true);
  };
  const handleCategoryNext = () => {
    setOtpVerify(false);
    //setCategory();
  };
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Create />}></Route>
        <Route exact path="/verify" element={<Verify />}></Route>
        <Route exact path="/category" element={<Category />}></Route>
        <Route exact path="/subcategory" element={<Subcategory />}></Route>
        <Route exact path="/bio" element={<Bio />}></Route>
        <Route exact path="/photos" element={<UploadPhoto />}></Route>
        <Route exact path="/projects" element={<ProjectDetails />}></Route>
        <Route exact path="/skills" element={<SkillDetails />}></Route>
        <Route exact path="/education" element={<EducationalDetails />}></Route>
        <Route exact path="/saveDetails" element={<FinalSave />}></Route>
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
