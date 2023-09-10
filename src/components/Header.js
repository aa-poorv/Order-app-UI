import React from "react";
import Navbar from "react-bootstrap/Navbar";
import classes from "./Header.module.css";
import frikly from "../assets/frikly-logo-01.jpg";
import lock from "../assets/lock.png";

function Header() {
  return (
    <Navbar
      breakpoints={["xxxl", "xxl", "xl", "lg", "md", "sm", "xs", "xxs"]}
      className={`bg-body-tertiary ${classes.nav} nav `}
    >
      <Navbar.Brand
        className={classes.brand}
        href='#home'
      >
        <img
          className={classes["frikly-icon"]}
          src={frikly}
          alt=''
        />
      </Navbar.Brand>

      <Navbar.Text className={classes["assurance-text"]}>
        <img
          className={classes["lock-icon"]}
          src={lock}
          alt=''
        />
        <p> 100% Secure login</p>
      </Navbar.Text>
    </Navbar>
  );
}

export default Header;
