import Tabs from './Tabs';
import styled from 'styled-components';
import logo from '../assets/blackpink_logo.png';

export default function Header() {
    return (
        <Container>
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

const Logo = styled.img`
    width: 100%;
`;

const Title = styled.h1`
    max-width: 280px;
    height: auto;
    font-size: 44px;
    letter-spacing: 4px;
    margin: 80px auto 30px;
    /* padding: 16px 0; */
`;

const SubTitle = styled.p`
    margin-bottom: 80px;
`;
