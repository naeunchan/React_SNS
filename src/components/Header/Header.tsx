import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import LeftNav from "./LeftNav";
import RightNav from "./RightNav";

export interface HeaderProps {
    title: string;
}

const HeaderDiv = styled.div`
    display: flex;
    align-items: center;
    padding: 10px 0;
    height: 60px;
    border-bottom: 1px solid #ccc;
    background-color: #fff;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    margin: 0 auto;
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    right: 0;
    font-size: 24px;
`;

const InnerDiv = styled.div`
    display: flex;
    width: 80%;
    justify-content: flex-start;
    align-items: center;
    margin: 0 auto;
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
            <InnerDiv>
                <LeftNav />
                <Title onClick={navigateToHome}>
                    <p>{props.title}</p>
                </Title>
                <RightNav />
            </InnerDiv>
        </HeaderDiv>
    );
}
