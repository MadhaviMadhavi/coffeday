import React, { useState } from "react";
import Category from "./Category";
import Create from "./Create";
import Subcategory from "./Subcategory";
import Verify from "./Verify";
function Registration() {
  const [phone, setPhone] = useState("");
  const [sendOtp, setSendOtp] = useState(false);
  const handlePhone = (ph) => {
    setPhone(ph);
    console.log(ph);
  };
  const handleSendOtp = () => {
    console.log('resending otp')
    setSendOtp(true);
  };
  return (
    <div>
      <div>
        {/* <Create
          phone={phone}
          handlePhone={handlePhone}
          handleSendOtp={handleSendOtp}
        />
        <Verify phone={phone} handleSendOtp={handleSendOtp}/>
        <Category/>
        <Subcategory/>  */}
        
      </div>
    </div>
  );
}

export default Registration;
