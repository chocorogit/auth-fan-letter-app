import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setIsLoginPage, setIsLogin } from 'redux/modules/authSlice';
import toast, { Toaster } from 'react-hot-toast';
import useInput from 'hooks/useInput';
import axios from 'axios';

const Login = () => {
    const isLoginPage = useSelector((state) => state.auth.isLoginPage);

    const [id, setId] = useInput();
    const [password, setPw] = useInput();
    const [nickname, setNickname] = useState();

    const dispatch = useDispatch();
    const onchangeIsLoginPageHandler = () => {
        dispatch(setIsLoginPage(!isLoginPage));

        // 인풋값들 초기화
        setNickname('');
        setId('');
        setPw('');
    };
    const navigate = useNavigate();

    const handleAuth = (event) => {
        event.preventDefault();
        const body = {
            id,
            password,
            ...(nickname && { nickname }),
        };
        let accessToken;
        // 회원가입 페이지
        if (isLoginPage === false) {
            const fetchSignUpUser = async () => {
                try {
                    // 회원가입
                    const { data } = await axios.post(`${process.env.REACT_APP_SERVER_URL}/register`, body);

                    toast.success('회원가입 성공!!', { duration: 1000 });
                    // 인풋값들 초기화
                    setNickname('');
                    setId('');
                    setPw('');

                    setTimeout(() => {
                        onchangeIsLoginPageHandler();
                    }, 1500);
                } catch (error) {
                    toast.error('회원가입 실패!', { duration: 1000 });
                }
            };
            fetchSignUpUser();
        }
        if (isLoginPage) {
            const fetchLoginUser = async () => {
                try {
                    // 로그인
                    const { data } = await axios.post(`${process.env.REACT_APP_SERVER_URL}/login`, body);

                    accessToken = data.accessToken;

                    toast.success('로그인 성공!!', { duration: 1000 });
                    setTimeout(() => {
                        navigate('/');
                    }, 1500);

                    dispatch(setIsLogin(true));

                    localStorage.setItem('accessToken', accessToken);
                } catch (error) {
                    toast.error('로그인 실패!', { duration: 1000 });
                }
            };
            fetchLoginUser();
        }
    };

    // useEffect(() => {
    //     //   db로 부터 값을 가져올 것이다.
    //     fetchLoginUser();
    // }, []);

    const onchangeNicknameHandler = (nickname) => {
        setNickname(nickname.target.value);
    };

    const onchangeIdHandler = (id) => {
        // 회원가입할 때만 검사
        if (isLoginPage === false) {
        }
        setId(id);
    };
    const onchangePwHandler = (pw) => {
        // 회원가입할 때만 검사
        if (isLoginPage === false) {
        }
        setPw(pw);
    };

    return (
        <>
            <LoginContainer>
                <FormContainer>
                    <Form onSubmit={handleAuth}>
                        <Title>{isLoginPage ? '로그인' : '회원가입'}</Title>
                        <p>{isLoginPage ? '오늘도 블핑에게 레터 남기기 꾹💌' : '회원가입하고 팬레터를 남겨보세요✍️'}</p>
                        {!isLoginPage && (
                            <InputContainer>
                                <label>닉네임</label>
                                <Input
                                    value={nickname}
                                    onChange={onchangeNicknameHandler}
                                    type='text'
                                    name='nickname'
                                    required
                                    maxLength={10}
                                    placeholder='닉네임을 입력해주세요(1~10글자)'
                                    autoFocus={isLoginPage === false}
                                ></Input>
                            </InputContainer>
                        )}
                        <InputContainer>
                            <label>아이디</label>
                            <Input
                                value={id}
                                onChange={onchangeIdHandler}
                                type='text'
                                name='id'
                                required
                                maxLength={10}
                                placeholder='아이디를 입력해주세요(4~10글자)'
                                autoFocus={isLoginPage === true}
                            ></Input>
                        </InputContainer>
                        <InputContainer>
                            <label>비밀번호</label>
                            <Input
                                value={password}
                                onChange={onchangePwHandler}
                                type='password'
                                name='password'
                                required
                                maxLength={15}
                                placeholder='비밀번호를 입력해주세요(4~15글자)'
                            ></Input>
                        </InputContainer>
                        <LoginButton
                            type='submit'
                            disabled={isLoginPage ? !id || !password : !id || !password || !nickname}
                        >
                            {isLoginPage ? '로그인하기' : '회원가입하기'}
                        </LoginButton>
                    </Form>
                    <Hr>OR</Hr>
                    <InfoTxt>{isLoginPage ? '사이트를 처음 이용하시나요?' : '이미 계정이 있나요?'}</InfoTxt>
                    <SignupButton $isLoginPage={isLoginPage} onClick={onchangeIsLoginPageHandler}>
                        {isLoginPage ? '회원가입하기' : '로그인하기'}
                    </SignupButton>
                </FormContainer>
                <Toaster />
            </LoginContainer>
        </>
    );
};

const LoginContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100%;
    margin-top: calc(max(64px, 50vh - (532px / 2)));
`;

const FormContainer = styled.div`
    width: 440px;
    height: auto;
    padding: 40px 60px;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #fff;
    box-shadow: 0px 0px 4px 0px rgba(228, 228, 228, 0.5);
`;

const Title = styled.h2`
    margin-bottom: 10px;
    font-weight: bold;
    font-size: 24px;

    + p {
        color: #999;
        margin-bottom: 30px;
    }
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    gap: 10px;
    font-size: 16px;
`;

const InputContainer = styled.div`
    font-weight: bold;
    display: flex;
    flex-direction: column;
    width: 100%;
    label {
        font-weight: 300;
        color: #777;
        margin-bottom: 10px;
        font-size: 14px;
    }
`;

const Input = styled.input`
    height: 40px;
    margin-bottom: 10px;
    padding: 5px;
    font-size: 16px;
    font-weight: 300;
    color: #fff;
    background: unset;
    border: 1px solid #777;
    &::placeholder {
    }
    :focus + label {
        color: #aaa;
    }
`;

const LoginButton = styled.button`
    width: 100%;
    background: #000;
    color: #f37c9a;
    border: 1px solid #f37c9a;
    padding: 10px;
    margin-top: 20px;
    font-size: 16px;
    cursor: pointer;
    transition: all 200ms ease-in-out;

    &:hover {
    }
    &:disabled {
        background-color: #555;
        color: #999;
        border: 1px solid #999;
        cursor: inherit;
    }
`;
const Hr = styled.div`
    display: flex;
    justify-content: center;
    position: relative;
    width: 100%;
    color: #777;
    font-size: 14px;
    text-align: center;
    margin: 30px 0;
    &::before {
        content: '';
        position: absolute;
        top: 50%;
        left: 0;
        width: calc(50% - 30px);
        height: 1px;
        background: #555555;
    }
    &::after {
        content: '';
        position: absolute;
        top: 50%;
        right: 0;
        width: calc(50% - 30px);
        height: 1px;
        background: #555555;
    }
`;
const InfoTxt = styled.p`
    font-size: 14px;
    color: #aaa;
    text-align: center;
    margin-bottom: 15px;
`;

const SignupButton = styled.button`
    width: 100%;
    background: #000;
    color: #fff;
    border: 1px solid #fff;
    padding: 10px;
    font-size: 16px;
    cursor: pointer;
    transition: all 200ms ease-in-out;
    &:hover {
    }
`;

export default Login;
