import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import LeftNav from "./LeftNav";
import RightNav from "./RightNav";

export interface HeaderProps {
    title: string;
}

const HeaderDiv = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    padding: 10px 0;
    height: 60px;
    border-bottom: 1px solid #ccc;
    background-color: #fff;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    right: 0;
    font-size: 24px;
`;

const Title = styled.button`
    font-size: 36px;
    hover: pointer;
`;

export default function Header(props: HeaderProps) {
    const navigate = useNavigate();

    const navigateToHome = () => {
        navigate("/");
    };

    return (
        <HeaderDiv>
            <LeftNav />
            <Title onClick={navigateToHome}>
                <p>{props.title}</p>
            </Title>
            <RightNav />
        </HeaderDiv>
    );
}
