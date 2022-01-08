import React, { useState } from "react";
import OtpInput from "react-otp-input";
import { useNavigate } from "react-router-dom";

export default function Otp(props) {
  let history = useNavigate();
  console.log(props);
  const { handleVerifyOtp, handleResendOtp } = props;
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
    /// if true call verify back end
    //handleVerifyOtp();
    console.log(history);
    //history.replace('');
    history("../category");
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
      <button className="capital button" onClick={() => handleVerify()}>
        Verify Otp
      </button>
      <div>
        <button onClick={handleResendOtp} className="resend">
          Resend OTP in 00:{counter > 9 ? counter : "0" + counter}
        </button>
      </div>
    </div>
  );
}
