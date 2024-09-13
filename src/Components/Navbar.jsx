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
            bgColor="transparent"
            btnBorder="3px solid var(--engineering-orange)"
          />
          <CustomDropDown />
          <Button
            title="About Us"
            bgColor="transparent"
            btnBorder="3px solid var(--engineering-orange)"
          />
          <Button
            title="Contact Us"
            bgColor="transparent"
            btnBorder="3px solid var(--engineering-orange)"
          />
        
      </nav>
      
    </>
  );
};

export default Navbar;
