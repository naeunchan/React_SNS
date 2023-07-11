import * as React from "react";
import Menu from "../Menu/Menu";
import NavDiv from "../Nav/NavDiv";
import NavList from "../Nav/NavList";
import { NavLink } from "react-router-dom";

const LeftNav: React.FunctionComponent<{}> = (props) => {
    return (
        <Menu className="left-nav">
            <NavDiv>
                <NavList>
                    <NavLink to="/about">About</NavLink>
                </NavList>
                <NavList>
                    <NavLink to="/contact">Contact</NavLink>
                </NavList>
                <NavList>
                    <NavLink to="/service">Service</NavLink>
                </NavList>
            </NavDiv>
        </Menu>
    );
};

export default LeftNav;
