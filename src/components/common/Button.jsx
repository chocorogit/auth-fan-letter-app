import styled from 'styled-components';

export default function Button({ text, onClick = () => {} }) {
    return (
        <BtnWrapper>
            <button onClick={onClick}>{text}</button>
        </BtnWrapper>
    );
}

const BtnWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    & button {
        width: 100%;
        height: 44px;
        margin-top: 20px;
        background: #000;
        border: 1px solid #777;
        color: #fff;
        font-size: 16px;
        cursor: pointer;
        transition: all 200ms ease-in-out;

        &:hover {
            color: #f37c9a;
            border: 1px solid #f37c9a;
        }
    }
`;
