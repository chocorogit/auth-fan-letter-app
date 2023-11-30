import React, { useState } from 'react';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
    const [isLoginPage, setIsLoginPage] = useState(true);
    const [nickname, setNickname] = useState('');
    const [id, setId] = useState('');
    const [pw, setPw] = useState('');

    // 에러
    const [nicknameError, setNicknameError] = useState('');
    const [idError, setIdError] = useState('');
    const [pwError, setPwError] = useState('');
    const [nicknamePass, setNicknamePass] = useState(false);
    const [idPass, setIdPass] = useState(false);
    const [pwPass, setPwPass] = useState(false);

    const onchangeIsLoginPageHandler = () => {
        setIsLoginPage(!isLoginPage);

        // 에러 메시지들 초기화
        setNicknameError('');
        setIdError('');
        setPwError('');

        // 인풋값들 초기화
        setNickname('');
        setId('');
        setPw('');
    };
    const navigate = useNavigate();

    const handleAuth = (event) => {
        event.preventDefault();
        if (isLoginPage) {
            // 로그인 요청
            if (!id || !pw) return alert('아이디와 비밀번호는 필수값입니다.');
            alert('로그인 성공!');
            navigate('/');
        } else {
            // 회원가입 요청
            if (!id || !pw || !nickname) return alert('아이디, 비밀번호, 닉네임은 필수값입니다.');

            alert('회원가입 성공!');
            onchangeIsLoginPageHandler();
        }
    };

    const onchangeNicknameHandler = (nickname) => {
        // 닉네임 : 1자-10자, 공백 허용하지 않음

        setNicknamePass(false);
        // 빈 값일 때
        if (nickname.target.value === '') {
            setNicknameError('닉네임을 입력해주세요!');
        }
        // 문자만 있지 않을 때(공백 있을 때)
        else if (!/^\S+$/.test(nickname.target.value)) {
            console.log('!/^S+$/.test(nickname)', '문자만 있지 않으면', !/^\S+$/.test(nickname));
            setNicknameError('공백이 입력되었습니다.');
        } else {
            setNicknameError('사용 가능한 닉네임입니다.');
            setNicknamePass(true);
        }
        setNickname(nickname.target.value);
    };

    const onchangeIdHandler = (id) => {
        // 아이디 : 4자-10자, 공백 허용하지 않음

        // 회원가입할 때만 검사
        if (isLoginPage === false) {
            setIdPass(false);

            // 빈 값일 때
            if (id.target.value === '') {
                setIdError('아이디를 입력해주세요!');
            }
            // 4글자 미만일 때
            else if (id.target.value.length < 4) {
                setIdError('아이디는 4글자 이상 입력 가능합니다.');
            }
            // 문자만 있지 않을 때(공백 있을 때)
            else if (!/^\S+$/.test(id.target.value)) {
                setIdError('공백이 입력되었습니다.');
            } else {
                setIdError('사용 가능한 아이디입니다.');
                setIdPass(true);
            }
        }
        setId(id.target.value);
    };

    const onchangePwHandler = (pw) => {
        // 아이디 : 4자-15자, 공백 허용하지 않음

        // 회원가입할 때만 검사
        if (isLoginPage === false) {
            setPwPass(false);

            // 빈 값일 때
            if (pw.target.value === '') {
                setPwError('비밀번호를 입력해주세요!');
            }
            // 4글자 미만일 때
            else if (pw.target.value.length < 4) {
                setPwError('비밀번호는 4글자 이상 입력 가능합니다.');
            }
            // 문자만 있지 않을 때(공백 있을 때)
            else if (!/^\S+$/.test(pw.target.value)) {
                setPwError('공백이 입력되었습니다.');
            } else {
                setPwError('사용 가능한 비밀번호입니다.');
                setPwPass(true);
            }
        }
        setPw(pw.target.value);
    };
    return (
        <>
            <ToHome to='/'>
                <svg width='22' height='24' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                    <path
                        fill='#f37c9a'
                        d='M11.999 1.993C6.486 1.994 2 6.48 1.999 11.994c0 5.514 4.486 10 10.001 10c5.514-.001 10-4.487 10-10c0-5.514-4.486-10-10.001-10.001zM12 19.994c-4.412 0-8.001-3.589-8.001-8c.001-4.411 3.59-8 8-8.001C16.411 3.994 20 7.583 20 11.994c0 4.41-3.589 7.999-8 8z'
                    />
                    <path fill='#f37c9a' d='m12.012 7.989l-4.005 4.005l4.005 4.004v-3.004h3.994v-2h-3.994z' />
                </svg>
                &#160;Home
            </ToHome>
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
                                {nicknameError && (
                                    <NicknameErrorMessage nicknamepass={nicknamePass}>
                                        {nicknameError}
                                    </NicknameErrorMessage>
                                )}
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
                            {idError && <IdErrorMessage idpass={idPass}>{idError}</IdErrorMessage>}
                        </InputContainer>
                        <InputContainer>
                            <label>비밀번호</label>
                            <Input
                                value={pw}
                                onChange={onchangePwHandler}
                                type='password'
                                name='password'
                                required
                                maxLength={15}
                                placeholder='비밀번호를 입력해주세요(4~15글자)'
                            ></Input>
                            {pwError && <PwErrorMessage pwpass={pwPass}>{pwError}</PwErrorMessage>}
                        </InputContainer>
                        <ButtonContainer>
                            <LoginButton type='submit' disabled={isLoginPage ? !id || !pw : !id || !pw || !nickname}>
                                {isLoginPage ? '로그인하기' : '회원가입하기'}
                            </LoginButton>
                            <Hr>OR</Hr>
                            <InfoTxt>{isLoginPage ? '사이트를 처음 이용하시나요?' : '이미 계정이 있나요?'}</InfoTxt>
                            <SignupButton $isLoginPage={isLoginPage} onClick={onchangeIsLoginPageHandler}>
                                {isLoginPage ? '회원가입하기' : '로그인하기'}
                            </SignupButton>
                        </ButtonContainer>
                    </Form>
                </FormContainer>
            </LoginContainer>
        </>
    );
};

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
    /* border: 1px solid #777; */
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

const NicknameErrorMessage = styled.p`
    color: ${(props) => (props.nicknamepass === true ? '#5eff74' : '#ff5e5e')};
    font-size: 14px;
    font-weight: 300;
`;

const IdErrorMessage = styled.p`
    color: ${(props) => (props.idpass === true ? '#5eff74' : '#ff5e5e')};
    font-size: 14px;
    font-weight: 300;
`;

const PwErrorMessage = styled.p`
    color: ${(props) => (props.pwpass === true ? '#5eff74' : '#ff5e5e')};
    font-size: 14px;
    font-weight: 300;
`;
const ButtonContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 100%;
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
    position: relative;
    color: #777;
    font-size: 14px;
    text-align: center;
    margin: 20px 0;
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
