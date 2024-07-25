import "./HeroImgStyles.css";
import { React } from "react";
import ComplaintForm from "./ComplaintForm";
import IntroImg from "../../assets/intro-bg.jpg";
import { Link } from "react-router-dom";

export const HeroImg = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="into-img" src={IntroImg} alt='Hero Image' />
      </div>

      <div className="content">
        <p>Please enter the fraudster Details Below.</p>
        <ComplaintForm/>
      </div>
    </div>
  );
};

