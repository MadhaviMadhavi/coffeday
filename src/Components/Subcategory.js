import React from "react";
import { FaJava } from "react-icons/fa";
import { SiPython, SiScala,SiPhp, SiNodedotjs } from "react-icons/si";
import { BsBatteryFull } from "react-icons/bs";
import { DiDotnet } from "react-icons/di";
import {MdOutlineDevicesOther} from 'react-icons/md';



import { Footer, Header } from "./Card";

function Subcategory() {
  return (
    <div className="card">
      <Header />
      <main className="main">
        <header>
          <div>Choose sub category</div>
        </header>
        <section>
          <div className="flex">
            <div>
              <BsBatteryFull />
              <div>Fullstack</div>
            </div>
            <div>
              <SiPython />
              <div>Python</div>
            </div>
            <div>
              <SiPhp />
              <div>PHP</div>
            </div>
            <div>
              <DiDotnet />
              <div>.NET</div>
            </div>
          </div>
          <div className="flex">
            <div>
              <FaJava />
              <div>Java</div>
            </div>
            <div>
              <SiScala />
              <div>Scala</div>
            </div>
            <div>
              <SiNodedotjs />
              <div>Node JS</div>
            </div>
            <div>
              <MdOutlineDevicesOther />
              <div>Other</div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Subcategory;
