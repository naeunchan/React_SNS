import * as React from "react";
import styled from "styled-components";

const NavItem = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin: 0 10px;

    color: rgba(33, 33, 33, 0.5) !important;
    hover: pointer;

    &:hover {
        color: rgba(33, 33, 33, 1) !important;
    }
`;

interface NavItemProps {
    children: React.ReactNode;
}

const NavList: React.FunctionComponent<NavItemProps> = (props) => {
    return <NavItem>{props.children}</NavItem>;
};

export default NavList;
