import React from "react";
import { Nav, NavLink, NavMenu } from "./NavbarElements";
 
const Navbar = () => {
    return (
        <>
            <Nav>
                <NavMenu>
                <NavLink to="/" activeStyle>
                        Home
                    </NavLink>
                    <NavLink to="/bird1" activeStyle>
                        Bird 1
                    </NavLink>
                    <NavLink to="/bird2" activeStyle>
                        Bird 2
                    </NavLink>
                </NavMenu>
            </Nav>
        </>
    );
};
 
export default Navbar;