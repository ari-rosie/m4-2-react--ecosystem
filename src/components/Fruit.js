import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div `
    width: 300px;
    img, p {
        width: 100px;
    }
`;

const Fruit = ({fruit}) => {
    return (
        <Wrapper>
            <img src={fruit.imageSrc} alt={fruit.name} />
            <h3>{fruit.name}</h3>
            <p>{fruit.latinName}</p>
        </Wrapper>
    );
};

export default Fruit;