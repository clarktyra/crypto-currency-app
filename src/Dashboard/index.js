
import React from 'react';
import styled from 'styled-components';
import Page from '../Shared/Page';
import PriceGrid from './PriceGrid';
import CoinSpotLight from './CoinSpotlight';
import PriceChart from './PriceChart'

const ChardGrid = styled.div`
    display: grid;
    margin-top: 20px;
    grid-gap: 15px;
    grid-template-columns: 1fr 3fr;
`

export default function(){
    return <Page name="dashboard">
       <PriceGrid />
       <ChardGrid>
            <CoinSpotLight/>
            <PriceChart />
        </ChardGrid>
    </Page>
}