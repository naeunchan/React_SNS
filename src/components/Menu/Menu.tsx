import * as React from "react";
import styled from "styled-components";

export interface MenuProps {
    className?: string;
    children?: React.ReactNode;
}

const MenuDiv = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    height: 100%;
    background-color: white;
    margin: 0;
`;

const MenuList = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    height: 100%;
    background-color: white;
    list-style: none;
    margin: 0;
`;

export default function Menu(props: MenuProps) {
    return (
        <MenuDiv>
            <MenuList>{props.children}</MenuList>
        </MenuDiv>
    );
}
