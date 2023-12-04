import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet, Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import styled from 'styled-components';
import { logout } from 'redux/modules/authSlice';

function Layout() {
    const isLogin = useSelector((state) => state.auth.isLogin);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        if (!isLogin) {
            navigate('/login');
        }
    }, [isLogin, navigate]);

    return (
        <>
            <ToHome to='/'>Home</ToHome>
            <LoginOutButtonWrap>
                <ToProfile to='/profile'>내 프로필</ToProfile>
                <LoginOutButton onClick={() => dispatch(logout())}>로그아웃</LoginOutButton>
            </LoginOutButtonWrap>
            <Outlet />
        </>
    );
}

const ToHome = styled(Link)`
    position: fixed;
    top: 20px;
    left: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100px;
    padding: 10px;
    color: #f37c9a;
`;
const LoginOutButtonWrap = styled.div`
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
const ToProfile = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100px;
    padding: 10px;
    color: #ffffff;
`;
const LoginOutButton = styled.button`
    color: #f7a7bb;
    border: 1px solid #f7a7bb;
    /* background: #f7a7bb; */
    &:hover {
        color: #111;
        background: #f7a7bb;
    }
`;

export default Layout;
