import React, { FC, useState } from "react";
import { Col, Table } from "react-bootstrap";
import {PokemonCard, priceHistoryData} from '../ProductCard/cardInfo'; 
import './PriceHistory.css';

interface PriceHistoryProps{
    cardInfo: PokemonCard; 
}

const PriceHistory: FC<PriceHistoryProps > = ({ cardInfo}): JSX.Element => {

    const renderPriceData = (priceHistory : priceHistoryData) => { //passes in the priceHistory array within PokemonCard
        return (
        <tr /*key={index}*/>
            <th>{priceHistory.month}/{priceHistory.day}/{priceHistory.year}</th>
            <th>{priceHistory.quantity}</th>
            <th>{priceHistory.price}</th>
        </tr>
        ); 
    }; 

    return (
        <div className="price-history-comp">
            <h1 className="price-history-title">Price History</h1>
            <Table className="price-history-tbl" size="sm">
                <thead>
                    <tr>
                        <th className="date-col">DATE</th>
                        <th className="qty-col">QTY</th>
                        <th className="price-col">PRICE</th>
                    </tr>
                </thead>
                <tbody>
                    {/*Incorporate some kind of use of state here to store the number of items to show as 4*/}
                    {cardInfo.priceHistory.slice(0, 4).map(renderPriceData)}
                </tbody>
            </Table>
        </div>
        
    );

}
  
  export default PriceHistory;