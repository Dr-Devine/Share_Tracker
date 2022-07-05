import React from "react";
import ShareList from "../components/ShareList";
import TotalValue from "../components/TotalValue";
import ShareChart from "../components/ShareChart";
import News from "../components/News";
import styled from "styled-components";

const GridContainer = styled.div`
    display: grid;
    grid-template-columns: 30% 70%;
    grid-template-rows: 50% 20% 30%;
`

const GridList = styled.div`
    grid-column-start: 1;
    grid-column-end: 1;
    grid-row-start: 1;
    grid-row-end: 2;
    background-color: #2e6171;
    position: sticky;
    max-width: 250px;
    min-height: 700px;
    margin-left: 20px;
    border-left: 1px solid #220c10;
    border-right: 1px solid #220c10;
`

const GridChart = styled.div`
    grid-column-start: 2;
    grid-column-end: 2;
    grid-row-start: 1;
    grid-row-end: 1;
`

const GridTotal = styled.div`
    grid-column-start: 2;
    grid-column-end: 2;
    grid-row-start: 2;
    grid-row-end: 2;
`

const GridNews = styled.div`
grid-column-start: 2;
grid-column-end: 3;
grid-row-start: 3;
grid-row-end: 3;
`

const UserPortfolio = ({ portfolio, getSymbol, stock }) => {

    const errorMessage = {
        "Note": "Thank you for using Alpha Vantage! Our standard API call frequency is 5 calls per minute and 500 calls per day. Please visit https://www.alphavantage.co/premium/ if you would like to target a higher API call frequency."
    }


    return (
        <GridContainer>
            <GridList>
                <ShareList portfolio={portfolio} getSymbol={getSymbol} />
            </GridList>
            <GridChart>
                <ShareChart />
            </GridChart>
            <GridTotal>
                <TotalValue stock={stock} />

            </GridTotal>
            <GridNews>
                <News />
            </GridNews>

        </GridContainer>
    )
};

export default UserPortfolio;
