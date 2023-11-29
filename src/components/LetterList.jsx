import styled from 'styled-components';
import { useSelector } from 'react-redux';
import LetterCard from './LetterCard';

export default function LetterList() {
    const activeMember = useSelector((state) => state.member);
    const letters = useSelector((state) => state.letters);

    const filteredLetters = letters.filter((letter) => letter.writedTo === activeMember);
    return (
        <ListWrapper>
            <ListTitle>팬레터 목록 2</ListTitle>
            {filteredLetters.length === 0 ? (
                <p>{activeMember}에게 남겨진 팬레터가 없습니다. 첫 번째 팬레터의 주인공이 되보세요!</p>
            ) : (
                filteredLetters.map((letter) => <LetterCard key={letter.id} letter={letter} />)
            )}
        </ListWrapper>
    );
}

const ListWrapper = styled.ul`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 500px;
    margin: 40px 0 0;
    /* padding: 30px 20px; */
    /* border: 1px solid #777; */
    background-image: linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9));
`;

const ListTitle = styled.h3`
    margin-bottom: 20px;
    color: #fff;
    font-weight: 500;
`;
