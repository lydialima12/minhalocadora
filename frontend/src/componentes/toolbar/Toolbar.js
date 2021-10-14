import React from "react";
import "./Toolbar.css";
import { Navbar, NavbarBrand } from "reactstrap";

function Toolbar () {
  return (
    <div>
      <Navbar className="toolbar" light expand="md" justify-content-end>
        <NavbarBrand className="logotipo" href="/">
          videTv
        </NavbarBrand>
      </Navbar>
    </div>
  );
};
export default Toolbar;
