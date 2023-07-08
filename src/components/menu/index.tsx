import * as React from "react";
import styled from "styled-components";

export interface MenuProps {
    className?: string;
    pages: Array<string>;
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

const MenuItem = styled.li`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    height: 100%;
    background-color: white;
    margin: 10px;
`;

const Anchor = styled.a`
    underline: none;
    text-decoration: none;
    color: rgba(33, 33, 33, 0.5) !important;
    hover: pointer;

    &:hover {
        color: rgba(33, 33, 33, 1) !important;
    }
`;

export default function Menu(props: MenuProps) {
    const { pages } = props;
    return (
        <MenuDiv>
            <MenuList>
                {pages.map((page) => (
                    <MenuItem key={page}>
                        <Anchor href={page}>{page}</Anchor>
                    </MenuItem>
                ))}
            </MenuList>
        </MenuDiv>
    );
}
