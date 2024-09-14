import React from "react";
import CustomDropDown from "./CustomDropDown";
import Button from "./Button";

import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <nav>
        
          <Button
            title="Home"
            textColor="white"
            bgColor="transparent"
            btnBorder="3px solid white"
          />
          <CustomDropDown />
          <Button
            title="About Us"
            textColor="white"
            bgColor="transparent"
            btnBorder="3px solid white"
          />
          <Button
            title="Contact Us"
            textColor="white"
            bgColor="transparent"
            btnBorder="3px solid white"
          />
        
      </nav>
      
    </>
  );
};

export default Navbar;
