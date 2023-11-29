import React from 'react';
import styled from 'styled-components';

const Login = () => {
    return (
        <>
            <LoginContainer>
                <InputContainer>
                    <Form>
                        <Title>로그인</Title>
                        <IdContainer>
                            <label>Email</label>
                            <Input type='email' name='email' required placeholder='sparta@gmail.com' autoFocus></Input>
                        </IdContainer>
                        <PasswordContainer>
                            <label>Password</label>
                            <Input type='password' name='password' required></Input>
                        </PasswordContainer>
                    </Form>
                    <ButtonContainer>
                        <LoginButton>로그인</LoginButton>
                    </ButtonContainer>
                </InputContainer>
            </LoginContainer>
        </>
    );
};

const LoginContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    width: 100vw;
    height: 100vh;
`;

const InputContainer = styled.div`
    width: 440px;
    height: auto;
    padding: 40px 60px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 16px;
    background-color: #fff;
    box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h2`
    font-weight: bold;
    font-size: 20px;
    margin-bottom: 30px;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    gap: 10px;
    font-size: 16px;
`;

const IdContainer = styled.div`
    font-weight: bold;
    display: flex;
    flex-direction: column;
    width: 100%;
    label {
        font-weight: normal;
        color: #777;
        margin-bottom: 10px;
        font-size: 14px;
    }
`;

const Input = styled.input`
    padding: 5px;
    border-radius: 8px;
    border: 1px solid #c7c7c7;
    height: 40px;
    margin-bottom: 10px;
    font-size: 16px;
`;

const PasswordContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    label {
        font-weight: normal;
        color: #777;
        margin-bottom: 10px;
        font-size: 14px;
    }
`;

const ButtonContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin: 10px;
    width: 100%;
`;

const LoginButton = styled.button`
    width: 100%;
    border: none;
    border-radius: 8px;
    padding: 10px;
    font-size: 16px;
    cursor: pointer;
    transition: all 0.2s;
`;

export default Login;
