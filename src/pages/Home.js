import React from "react";
import pic from "../assets/images/profile.jpg";

function Home() {
  return (
    <div className="about-me-container">
      <div className="about-me-title">
        <h1>About Me</h1>
      </div>
      <div className="pic-header">
        <img src={pic} className="app-pic" alt="profile-pic" />
      </div>
      <div className="about-me-desc">
        <p>
          Graduated from St. Catherine University with a degree in Accounting. I
          worked in Tax and Accounting Operations for most of my career. My most
          recent job was with the State of Minnesota working in the Accounting
          Division and handling the financial operations for the State. During
          this time, I gained experience with using Oracle database structures
          and Microsoft Access Database to maintain and build systems for the
          operations team. During my time, the State's Financial Accounting
          system had to undergo a large upgrade that would essentially change
          the user's interaction with the system. I assisted in writing test
          scripts and with testing the functional aspects of the new system. It
          was during this time, that I discovered a passion for working on
          technical issues and aiding in the solution and implemenation of the
          upgrade. My passion for technology, led me to enroll into the
          University of Minnesota Full-stack Web Development Bootcamp.
          <br />
          Armed with proficiency in numerous technologies including JavaScript,
          Node, SQL, MongoDB, and React, I can succeed in the tech world.
          <br />
        </p>
      </div>
    </div>
  );
}

export default Home;
