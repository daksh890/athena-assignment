import React from "react";
import "./vedio.scss";

function Vedio({ vedioSrc }) {
  return (
    <div className="Vedio">
      <video controls={false} key={vedioSrc} autoPlay muted loop preload="true">
        <source src={vedioSrc} type="video/mp4" />
      </video>
    </div>
  );
}

export default Vedio;
