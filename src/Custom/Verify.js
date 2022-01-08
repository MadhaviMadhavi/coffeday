import React from "react";
import CustomCard from "../Custom/CustomCard";
import Otp from "./Otp";
function Verify(props) {
  console.log(props, "verifyprops");
  return (
    <CustomCard>
      {VerifyBody(
        // props.phone,
        // props.otpVerify,
        // props.handleVerifyOtp,
        // props.handleResendOtp
        props
      )}
    </CustomCard>
  );
}
const VerifyBody = (props) => {
  const { phone, otpVerify, handleVerifyOtp, handleResendOtp } = props;
  console.log(phone, "verifyBodyProps");
  const showStar = () => {
    let len = phone && phone.length;
    let first = phone && phone.substring(0, 1);
    let last = phone && phone.substring(len - 2, len);
    let star = phone && phone.replace(phone.substring(2, len - 2), "*");
    return first + star + last;
  };
  return (
    <main className="main">
      <header>
        <p className="font_12">
          OTP has been sent successfully to {showStar()}
        </p>
        <p className="font_12">Please enter the same OTP below.</p>
      </header>
      <section>
        <Otp
          otpVerify={otpVerify}
          handleVerifyOtp={handleVerifyOtp}
          handleResendOtp={handleResendOtp}
        />
      </section>
      <footer className="otp_footer">
        <p className="font_12">
          Already user
          <strong>
            {/* <a href="#"> */}
            <u> Sigin Now</u>
            {/* </a> */}
          </strong>
        </p>
      </footer>
    </main>
  );
};
export default Verify;
