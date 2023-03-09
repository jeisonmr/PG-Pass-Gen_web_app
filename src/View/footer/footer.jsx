import React from "react";
import Data from "/src/Components/Json/data";
import github from "/public/img/github.webp";

function Footer() {
  const footerView = {
    width: "100%",
    height: "10rem",
    background: "var(--cl-1)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "var(--font-1)",
    fontSize: "10px",
    paddingTop: "70px",
    color: "var(--cl-3)",
  };
  const img = {
    webkitUserDrag: "none",
    khtmlUserDrag: "none",
    mozUserDrag: "none",
    oUserDrag: "none",
    userDrag: "none",
  };
  const svgImg = {};
  const gitIcon = {
    width: "40px",
    marginBottom: "20px",
  };
  return (
    <section style={footerView}>
      <a href={Data.git} target="_blank">
        <img style={gitIcon} src={github} alt="" />
      </a>
      <p>{Data.copyright}</p>
    </section>
  );
}

export default Footer;
