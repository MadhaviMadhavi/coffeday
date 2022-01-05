import React from "react";
import { Footer, Header } from "./Card";
import { AiOutlineFileSearch } from "react-icons/ai";
import {BsGraphUp} from "react-icons/bs";
import {GiDeathNote,GiHumanPyramid} from "react-icons/gi";
import {MdDeveloperMode} from 'react-icons/md';
import {FaRegHandshake} from 'react-icons/fa';
import {AiOutlineCalculator} from 'react-icons/ai';
import {MdOutlineDevicesOther} from 'react-icons/md';


function Category() {
  return (
    <div className="card">
      <Header />
      <main className="main">
        <sec-header>Choose a category</sec-header>
        <section>
          <div className="flex">
            <div>
              <MdDeveloperMode />
              <div>Development</div>
            </div>
            <div>
              <GiDeathNote />
              <div>Designer</div>
            </div>
            <div>
              <AiOutlineFileSearch />
              <div>Testing</div>
            </div>
            <div>
              <BsGraphUp />
              <div>Marketing</div>
            </div>
          </div>
          <div  className="flex">
            <div>
              <GiHumanPyramid />
              <div>Recruitment</div>
            </div>
            <div>
              <FaRegHandshake />
              <div>Sales</div>
            </div>
            <div>
              <AiOutlineCalculator />
              <div>Accountant</div>
            </div>
            <div>
              <MdOutlineDevicesOther />
              <div>Other</div>
            </div>
          </div>
        </section>
        <sec-footer>
          <div>
            <button>Back</button>
          </div>
          <button>Next</button>
        </sec-footer>
      </main>

      <Footer />
    </div>
  );
}

export default Category;
