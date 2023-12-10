import React from "react";
import "./style.css";

const page = () => {
  const mystyle = {
    color: "white",
    backgroundColor: "DodgerBlue",
    padding: "10px",
    fontFamily: "Arial",
  };

  return (
    <>
      <h2 style={{ backgroundColor: "red", padding: "10px" }}>
        CSS Inline styling
      </h2>
      <br />
      <h1>CSS External Styling w.r.t tagname</h1>
      <br />
      <h1 className="blue-head">CSS External Styling w.r.t tagname + class</h1>
      <br />
      <h1 id="h0" className="blue-head">
        CSS External Styling w.r.t tagname + class + id
      </h1>
      <br />
      <h2 style={mystyle}>CSS styling with styles saved in a variable</h2>
    </>
  );
};

export default page;
