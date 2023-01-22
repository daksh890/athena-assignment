import React from "react";
import "./text.scss";

function Text({ text }) {
  return (
    <div className="aside">
      <div className="top-text">
        <span>{text.subHeading}</span>
      </div>
      <div className="middle-text">
        <h1>{text.heading}</h1>
      </div>
      <div className="para-text">
        <p>{text.description}</p>
      </div>
    </div>
  );
}

export default Text;
