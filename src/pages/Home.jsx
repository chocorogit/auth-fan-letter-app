import AddForm from 'components/AddForm';
import Header from 'components/Header';
import LetterList from 'components/LetterList';
import styled from 'styled-components';

export default function Home() {
    return (
        <Container>
            <Header />
            <AddForm />
            <LetterList />
        </Container>
    );
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
    /* background: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.5)),
        url('https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iK1.u6oUF6FE/v0/1600x800.jpg'); */
    background-size: 50%;
    background-position: center top;
    background-repeat: no-repeat;
`;
