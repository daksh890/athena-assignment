import React, { useEffect, useState } from "react";
import Text from "./Text/text";
import "./Low.scss";
import Vedio from "./Vedio/Vedio";
function Low() {
  const vedioUrl = [
    "https://global-uploads.webflow.com/62efc7cb58ad153bfb146988/6341303c29c5340961dc9ae6_Mco-1-transcode.mp4",
    "https://global-uploads.webflow.com/62efc7cb58ad153bfb146988/63413ff244f1dc616b7148a0_Mco-transcode.mp4",
    "https://global-uploads.webflow.com/62efc7cb58ad153bfb146988/63455a67996ba248148c4e31_add-options%20(3)-transcode.mp4",
  ];
  const [vedioSrc, setvedioSrc] = useState(vedioUrl[0]);
  const [text, setText] = useState([]);

  useEffect(() => {
    const handleScroll = (e) => {
      if (window.scrollY <= 1150) {
        setvedioSrc(vedioUrl[0]);
      } else if (window.scrollY > 1150 && window.scrollY < 1900) {
        setvedioSrc(vedioUrl[1]);
      } else if (window.scrollY >= 1900) {
        setvedioSrc(vedioUrl[2]);
      }
    };

    const handleData = () => {
      fetch("https://mocki.io/v1/ee762599-31ae-4a3d-a6c7-d596525945e1")
        .then((res) => res.json())
        .then((json) => {
          console.log(json.texts);
          setText(json.texts);
        });
    };

    window.addEventListener("scroll", handleScroll);
    handleData();
  }, []);

  return (
    <div className="low">
      <div className="low-left">
        {text &&
          text.map((item, key) => (
            <div className="low-text" key={key}>
              <Text text={item} />
            </div>
          ))}
      </div>
      <div className="low-right">
        <Vedio vedioSrc={vedioSrc} />
      </div>
    </div>
  );
}

export default Low;
