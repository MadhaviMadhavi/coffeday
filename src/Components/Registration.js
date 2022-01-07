import React, { useState } from "react";
import Create from "../Custom/Create";
import Verify from "../Custom/Verify";
import Category from "../Custom/Category";
import Subcategory from "../Custom/Subcategory";
import Bio from "../Custom/Bio";
import UploadPhoto from "../Custom/UploadPhoto";
import ProjectDetails from "../Custom/ProjectDetails";

function Registration() {
  const [phone, setPhone] = useState("");
  const [sendOtp, setSendOtp] = useState(false);
  const handlePhone = (ph) => {
    setPhone(ph);
    console.log(ph);
  };
  const handleSendOtp = () => {
    console.log("resending otp");
    setSendOtp(true);
  };
  return (
    <div>
      <div>
        {/* <Create
          phone={phone}
          handlePhone={handlePhone}
          handleSendOtp={handleSendOtp}
        /> */}
        {/* <Verify phone={phone} handleSendOtp={handleSendOtp} /> */}
        {/* <Category /> */}
        {/* <Subcategory />  */}
        {/* <Bio /> */}
        {/* <UploadPhoto/> */}
        <ProjectDetails/>
      </div>
    </div>
  );
}

export default Registration;
