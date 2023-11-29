import styled, { css } from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { setMember } from 'redux/modules/member';
import { Link } from 'react-router-dom';

export default function Tabs() {
    const activeMember = useSelector((state) => state.member);
    const dispatch = useDispatch();

    const onActiveMember = (event) => {
        if (event.target === event.currentTarget) return;

        dispatch(setMember(event.target.textContent));
    };
    return (
        <TabsWrapper onClick={onActiveMember}>
            <Tab>
                <StyledLink to='' $activeMember={activeMember}>
                    제니
                </StyledLink>
            </Tab>
            <Tab>
                <StyledLink to='' $activeMember={activeMember}>
                    지수
                </StyledLink>
            </Tab>
            <Tab>
                <StyledLink to='' $activeMember={activeMember}>
                    로제
                </StyledLink>
            </Tab>
            <Tab>
                <StyledLink to='' $activeMember={activeMember}>
                    리사
                </StyledLink>
            </Tab>
        </TabsWrapper>
    );
}

const TabsWrapper = styled.ul`
    display: flex;
    align-items: center;
    justify-content: center;
    /* gap: 20px; */
    width: calc(100% - 40px);
    max-width: 500px;
    margin: 0 auto;
    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5));
`;

const Tab = styled.li`
    width: 25%;
    height: 40px;
    line-height: 36px;
    font-size: 18px;
    cursor: pointer;
`;

const StyledLink = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    font-weight: ${(props) => (props.$activeMember === props.children ? 500 : 200)};
    color: ${(props) => (props.$activeMember === props.children ? '#fff' : '#ddd')};
    border: 1px solid ${(props) => (props.$activeMember === props.children ? '#f7a7bb' : 'unset')};
    box-shadow: 0 0 8px ${(props) => (props.$activeMember === props.children ? '#f7a7bb' : 'unset')};
    transition: all 200ms;
`;
