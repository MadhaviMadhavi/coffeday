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
          Create your free account now.
        </header>
        <section>
          {/* <TextField
            //label="Email or Mobile"
            //variant="outlined"
            
            type="text"
            placeholder="Email or Mobile"
            value={phone}
            onChange={(e) => {
              handlePhone(e.target.value);
            }}
          /> */}
          <input
            type="email or phone"
            placeholder="Email or Mobile"
            value={phone}
            onChange={(e) => {
              handlePhone(e.target.value);
            }}
          />
                  
            <button className="capital" onClick={handleSendOtp}>
              Send otp
            </button>
          
        </section>
        <footer>
          <p className="font_12">
            Already user
            <strong>
              <a href="#">
                <u> Sigin Now</u>
              </a>
            </strong>
          </p>
        </footer>
      </main>
      <Footer />
    </div>
  );
}

export default Create;
