import React from "react";
import { Footer, Header } from "./Card";
import TextField from "@mui/material/TextField";

function Create({ phone, handlePhone, handleSendOtp }) {
  return (
    <div className="card">
      <Header />
      <main className="main">
        <header className="font_12">
          {/* <img src="" alt="create" /> */}
          <p> Create your free account now.</p>
        </header>
        <section>
          <input
            className="input"
            type="email or phone"
            placeholder="Email or Mobile"
            value={phone}
            onChange={(e) => {
              handlePhone(e.target.value);
            }}
          />

          <button className="capital button" onClick={handleSendOtp}>
            Send otp
          </button>
        </section>
        <footer>
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
      <Footer />
    </div>
  );
}

export default Create;
