import styled from 'styled-components';

import { useNavigate } from 'react-router-dom';
import Avatar from './common/Avatar';
import { getFormattedDate } from 'util/date';

export default function LetterCard({ letter }) {
    const navigate = useNavigate();

    return (
        <LetterWrapper onClick={() => navigate(`/detail/${letter.id}`)}>
            <UserInfo>
                <Avatar src={letter.avatar} />
                <NicknameAndDate>
                    <p>{letter.nickname}</p>
                    <time>{getFormattedDate(letter.createdAt)}</time>
                </NicknameAndDate>
            </UserInfo>
            <Content>{letter.content}</Content>
        </LetterWrapper>
    );
}

const LetterWrapper = styled.li`
    margin: 8px 0;
    padding: 24px;
    border: 1px solid #333;
    /* border: 1px solid #f7a7bb; */
    cursor: pointer;
    transition: all 0.2s;
    &:hover {
        transform: scale(1.01);
    }
`;

const UserInfo = styled.div`
    display: flex;
    gap: 12px;
    align-items: center;
`;

const NicknameAndDate = styled.div`
    display: flex;
    flex-direction: column;
    gap: 6px;
    font-size: 14px;
    & p {
        color: #fff;
    }
    & time {
        color: #999;
    }
`;

const Content = styled.p`
    margin-top: 20px;
    /* background-color: #f7a7bb; */
    color: #fff;
    line-height: 1.5;
    white-space: pre-line;
    overflow: hidden;
    text-overflow: ellipsis;
`;
