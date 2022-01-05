import React from "react";
import { GrDatabase } from "react-icons/gr";

function Header() {
  return (
    <header className="header">
      <GrDatabase style={{ background: "white", marginRight: "10px" }} />
      <span className="capital"><strong>e database</strong></span>
    </header>
  );
}
function Footer() {
  return (
    <footer className="footer">
      <div style={{ fontSize: "20px" }}>Download app and stay connected.</div>
      <div className="footer_img">
        <img src="AppStore.JPG" alt="Here play store and apple store" />
        <img src="PlayStore.JPG" alt="Here play store and apple store" />
      </div>
    </footer>
  );
}

export { Header };
export { Footer };
