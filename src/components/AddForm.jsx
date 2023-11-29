import { useState } from 'react';
import styled from 'styled-components';
import { v4 as uuid } from 'uuid';
import Button from './common/Button';
import { useDispatch } from 'react-redux';
import { addLetter } from 'redux/modules/letters';

export default function AddForm() {
    // const { setLetters } = useContext(LetterContext);
    const dispatch = useDispatch();

    const [nickname, setNickname] = useState('');
    const [content, setContent] = useState('');
    const [member, setMember] = useState('제니');

    const onAddLetter = (event) => {
        event.preventDefault();
        if (!nickname || !content) return alert('닉네임과 내용은 필수값입니다.');
        const date = new Date();
        const newLetter = {
            id: uuid(),
            nickname,
            content,
            avatar: null,
            writedTo: member,
            createdAt: date.toISOString(),
        };

        dispatch(addLetter(newLetter));
        setNickname('');
        setContent('');
    };

    return (
        <Form onSubmit={onAddLetter}>
            <InputWrapper>
                <label>닉네임</label>
                <input
                    onChange={(event) => setNickname(event.target.value)}
                    value={nickname}
                    placeholder='최대 20글자까지 작성할 수 있습니다.'
                    maxLength={20}
                />
            </InputWrapper>
            <InputWrapper>
                <label>내용</label>
                <textarea
                    placeholder='최대 100글자까지 작성할 수 있습니다.'
                    maxLength={100}
                    onChange={(event) => setContent(event.target.value)}
                    value={content}
                />
            </InputWrapper>
            <SelectWrapper>
                <label>누구에게 보내실 건가요?</label>
                <select onChange={(event) => setMember(event.target.value)}>
                    <option>제니</option>
                    <option>지수</option>
                    <option>로제</option>
                    <option>리사</option>
                </select>
            </SelectWrapper>
            <Button text='💌팬레터 등록하기' />
        </Form>
    );
}

const Form = styled.form`
    width: 100%;
    max-width: 500px;
    margin: 20px 0;
`;

const InputWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 20px 0;
    & label {
        margin-bottom: 16px;
        color: #fff;
    }
    & input,
    textarea {
        width: 100%;
        padding: 10px;
        font-size: 16px;
        color: #fff;
        background: unset;
        border: 1px solid #777;
    }
    &input {
        height: 40px;
    }
    & textarea {
        resize: none;
        height: 100px;
    }
`;

const SelectWrapper = styled(InputWrapper)`
    justify-content: flex-start;
    & label {
        width: 170px;
    }
    & select {
        height: 40px;
        padding: 0 10px;
        font-size: 16px;
        background: unset;
        border: 1px solid #777;
        color: #fff;
    }
    & option {
        color: #000;
    }
`;
