import React from 'react';
import styled, {css} from 'styled-components';

const CoinImage = styled.img`
    height: 50px;
    ${props => props.spotlight && css`
        height: 200px; 
        marging: auto;
        display: block;   
    `}
`

export default function ({coin, spotlight}){
    if(!coin) return <div></div>
    return <CoinImage
        spotlight={spotlight}
        alt={coin.CoinSymbol}
        src={`http://cryptocompare.com/${
            coin.ImageUrl
        }`}
    />;
}