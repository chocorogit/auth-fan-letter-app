import Tabs from './Tabs';
import styled from 'styled-components';
import logo from '../assets/blackpink_logo.png';
import { useNavigate } from 'react-router-dom';

export default function Header() {
    const Navigate = useNavigate();
    return (
        <Container>
            <LoginButtonWrap>
                <LoginButton
                    onClick={(e) => {
                        e.preventDefault();
                        Navigate(`/login`);
                    }}
                >
                    로그인
                </LoginButton>
            </LoginButtonWrap>
            <Title>
                <Logo src={logo} />
            </Title>
            <SubTitle>🖤 블랙핑크 멤버들에게 팬레터를 적어주세요! 🖤</SubTitle>
            <Tabs />
        </Container>
    );
}

const Container = styled.section`
    width: 100%;
    max-width: 1200px;
    text-align: center;
    color: white;
`;

const LoginButtonWrap = styled.div`
    display: flex;
    gap: 10px;
    justify-content: flex-end;
    align-items: center;
    width: 100%;
    height: 80px;

    & button {
        height: 40px;
        padding: 0 24px;
        font-size: 16px;
        background: unset;
        cursor: pointer;
        transition: all 200ms;
    }
`;
const LoginButton = styled.button`
    color: #f7a7bb;
    border: 1px solid #f7a7bb;
    /* background: #f7a7bb; */
    &:hover {
        color: #111;
        background: #f7a7bb;
    }
`;
const Title = styled.h1`
    max-width: 280px;
    height: auto;
    font-size: 44px;
    letter-spacing: 4px;
    margin: 80px auto 30px;
    /* padding: 16px 0; */
`;

const Logo = styled.img`
    width: 100%;
`;

const SubTitle = styled.p`
    margin-bottom: 80px;
`;
