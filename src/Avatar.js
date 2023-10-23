import React from "react";
import avatarImage from "./uu.jpg"; // Update the path to your avatar image
import "./style.css";

const Avatar = () => {
  return <img src={avatarImage} alt="Avatar" className="avatar" />;
};

export default Avatar;
