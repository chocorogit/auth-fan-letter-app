import styled, { css } from 'styled-components';
import defaultUser from 'assets/defaultUser.png';

export default function Avatar({ src, size }) {
    return (
        <AvatarFigure size={size}>
            <img src={src ?? defaultUser} alt='아바타이미지' />
        </AvatarFigure>
    );
}

const AvatarFigure = styled.figure`
    ${(props) => {
        switch (props.size) {
            case 'large':
                return css`
                    width: 56px;
                    height: 56px;
                `;
            default:
                return css`
                    width: 40px;
                    height: 40px;
                `;
        }
    }}

    border-radius: 50%;
    overflow: hidden;
    & img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 50%;
    }
`;
