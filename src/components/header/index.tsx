import Menu from "../menu";
import styled from "styled-components";

export interface HeaderProps {
    title: string;
}

const HeaderDiv = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 10px 0;
    height: 60px;
    border-bottom: 1px solid #ccc;
    background-color: #fff;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    font-size: 24px;
`;

const Title = styled.div`
    font-size: 36px;
`;

export default function Header(props: HeaderProps) {
    return (
        <HeaderDiv>
            <Menu className="page-navigation" pages={["About", "Contact", "Service"]} />
            <Title>{props.title}</Title>
            <Menu className="user-menu" pages={["Login", "My Page", "Search"]} />
        </HeaderDiv>
    );
}
