import * as React from "react";
import styled from "styled-components";

const Div = styled.div`
    display: flex;
    margin: 0 auto;
`;

interface NavProps {
    children: React.ReactNode;
}

const NavDiv: React.FunctionComponent<NavProps> = (props) => {
    return <Div>{props.children}</Div>;
};

export default NavDiv;
