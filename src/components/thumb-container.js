import React from "react";

export function ThumbContainer() {
  return (
    <div className="thumb-container">
      <div className="img-thum">
        <img src={require("../images/video1.jpg")}alt="video1"/>
      </div>
      <div className="img-thum">
        <img src={require("../images/video2.jpg")}alt="video2" />
      </div>
      <div className="img-thum">
        <img src={require("../images/video3.jpg")}alt="video3" />
      </div>
      <div className="img-thum">
        <img src={require("../images/video4.jpg")}alt="video4" />
      </div>
      <div className="img-thum">
        <img src={require("../images/video5.jpg")}alt="video5" />
      </div>
      <div className="img-thum">
        <img src={require("../images/video6.jpg")}alt="video6" />
      </div>
      <div className="img-thum">
        <img src={require("../images/video7.jpg")}alt="video7" />
      </div>
      <div className="img-thum">
        <img src={require("../images/video8.jpg")}alt="video8" />
      </div>
      </div>
  );
}
