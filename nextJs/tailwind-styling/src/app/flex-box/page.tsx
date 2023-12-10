import Image from "next/image";
import React from "react";
import "./flex.css";

const page = () => {
  return (
    <div className="container">
      <div className="team-profile">
        <Image
          src="https://images.pexels.com/photos/7242908/pexels-photo-7242908.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=150"
          className="team-img"
          alt="tem-member-0"
          width={100}
          height={50}
        />
        <div className="team-profile">
          <h3>Alexa Kardi</h3>
          <p>Founder and CEO</p>
        </div>
      </div>
      <div className="team-profile">
        <Image
          src="https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=150"
          className="team-img"
          alt="tem-member-1"
          width={100}
          height={50}
        />
        <div>
          <h3>Tavell Monroe</h3>
          <p>Web Developer</p>
        </div>
      </div>
      <div className="team-profile">
        <Image
          src="https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=150"
          className="team-img"
          alt="tem-member-2"
          width={100}
          height={50}
        />
        <div>
          <h3>Adale Smith</h3>
          <p>Marketing Specialist</p>
        </div>
      </div>
      <div className="team-profile">
        <Image
          src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&h=300"
          className="team-img"
          alt="tem-member-3"
          width={100}
          height={50}
        />
        <div>
          <h3>Thomas Mason</h3>
          <p>UX Designer</p>
        </div>
      </div>
    </div>
  );
};

export default page;

{
  /* <div>
            <button className="team-btn">Github</button>
            <button className="team-btn">Youtube</button>
          </div> */
}
