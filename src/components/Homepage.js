import React from 'react';
import { Link } from "react-router-dom";

import { items } from '../data.js';
import Fruit from './Fruit.js';
import styled from 'styled-components';

const Wrapper = styled.div `
    display: flex;
    flex-direction: column;
`;

const Catalogue = styled.div `
    display: flex;
    flex-wrap: wrap;
`;


const Homepage = () => {
    return (
        <Wrapper>
            <p>Fruit emporium sells the finest fruits from this world and beyond.</p>
            <p>Browse items:</p>
            <Catalogue>                
                {Object.keys(items).map(item => 
                    <Link key={'link'+ items[item].id} to={'/items/' + items[item].id}> 
                        <Fruit key={items[item].id} fruit={items[item]} />
                    </Link>
                )}
            </Catalogue>
        </Wrapper>
    );
};

export default Homepage;