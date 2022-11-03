import React from "react";
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import {
//   faYoutube,
//   faFacebook,
//   faTwitter,
//   faInstagram,
//   faFacebookSquare,
// } from '@fortawesome/free-brands-svg-icons'
import { FaFacebookSquare, FaInstagram } from "react-icons/fa";
//import styles from "../styles/icons.module.css";

export default function SocialFollow() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        paddingTop: "20px",
        paddingBottom: "20px",
        width: "30%",
        justifyContent: "space-evenly",
      }}
    >
      <a target="_blank" href="https://www.facebook.com/john.dahlberg/">
        <FaFacebookSquare className="icons" />
      </a>
      <a target="_blank" href="https://www.instagram.com/jompahl/?hl=sv">
        <FaInstagram className="icons" />
      </a>
    </div>
  );
}
