import React, { useState } from "react";
import OtpInput from "react-otp-input";

export default function App({ handleSendOtp }) {
  const [otp, setOtp] = useState("");
  const [counter, setCounter] = React.useState(0);
  // Third Attempts
  React.useEffect(() => {
    const timer =
      counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
    return () => clearInterval(timer);
  }, [counter]);
  const handleChange = (otp) => setOtp(otp);
  const handleVerify = () => {
    console.log(otp);
  };

  return (
    <div>
      <OtpInput
        style={{ border: "1px solid lightgray" }}
        className="inputOtp"
        onChange={handleChange}
        numInputs={5}
        value={otp}
        placeholder="*****"
        focusStyle="none"
        // separator={<span>-</span>}
      />
      <button className="capital" onClick={handleVerify}>
        Verify Otp
      </button>
      <div>
        <button onClick={handleSendOtp} className="resend">
          Resend OTP in 00:{counter > 9 ? counter : "0" + counter}
        </button>
      </div>
    </div>
  );
}
