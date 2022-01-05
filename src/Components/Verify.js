import React from "react";
import { Footer, Header } from "./Card";
import Otp from './Otp'
function Verify({ phone,handleSendOtp }) {
  const showStar = () => {
    let len = phone.length;
    let first = phone.substring(0, 1);
    let last = phone.substring(len - 2, len);
    let star = phone.replace(phone.substring(2, len - 2), "*");
    return first + star + last;
  };
  return (
    <div className="card">
      <Header />
      <main className="main">
        <header>
          <p>OTP has been sent successfully to {showStar()}</p>
          <p>Please enter the same OTP below.</p>
        </header>
        <section>
          <Otp handleSendOtp={handleSendOtp}/>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Verify;
