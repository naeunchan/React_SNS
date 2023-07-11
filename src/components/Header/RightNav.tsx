import * as React from "react";
import Menu from "../Menu/Menu";
import NavDiv from "../Nav/NavDiv";
import NavList from "../Nav/NavList";
import { NavLink } from "react-router-dom";

const RightNav: React.FunctionComponent<{}> = (props) => {
    return (
        <Menu className="left-nav">
            <NavDiv>
                <NavList>
                    <NavLink to="/login">Login</NavLink>
                </NavList>
                <NavList>
                    <NavLink to="/Sign-up">Sign Up</NavLink>
                </NavList>
            </NavDiv>
        </Menu>
    );
};

export default RightNav;
