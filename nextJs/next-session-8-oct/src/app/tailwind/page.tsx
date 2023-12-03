import Image from "next/image";
import React from "react";
import pic from "../../utils/pic.jpg";
import TailwindBtn from "@/components/TailwindLearning/Button";
import HeadingX from "@/components/TailwindLearning/Heading";

const page = () => {
  return (
    <>
      <HeadingX />
      <HeadingX />
      <button id="btn-0">Click Me0</button>
      <button className="green-btn" id="btn-1">
        Click Me1
      </button>
      <button className="green-btn" id="btn-3">
        Click Me3
      </button>
      <TailwindBtn />
    </>
  );
};

export default page;
