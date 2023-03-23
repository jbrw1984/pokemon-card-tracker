import React, { FC, useState } from "react";
import { Col, Table } from "react-bootstrap";
import './PriceHistory.css';

type SpecificSinglePokemonCard = {
    id: number;
    name: string;
    description: string;
    salePrice: number;
    marketPrice: number;
    image: string;
    priceHistory: priceHistoryData[]
  };
  
  type priceHistoryData = {
    month: number; 
    day: number; 
    year: number; 
    quantity: number; 
    price: number; 
  }

interface PriceHistoryProps{
    cardInfo: SpecificSinglePokemonCard; 
}

const PriceHistory: FC<PriceHistoryProps > = ({ cardInfo }): JSX.Element => {

    const renderPriceData = (priceHistory : priceHistoryData) => {
        return (
        <tr /*key={index}*/>
            <th>{priceHistory.month}/{priceHistory.day}/{priceHistory.year}</th>
            <th>{priceHistory.quantity}</th>
            <th>{priceHistory.price}</th>
        </tr>
        ); 
    }; 

    return (
        <div className="PriceHistoryComponent">
            <h1 className="PriceHistoryTitle">Price History</h1>
            <Table className="PriceHistoryTable" size="sm">
                <thead>
                    <tr>
                        <th className="DateColumn">DATE</th>
                        <th className="QtyColumn">QTY</th>
                        <th className="PriceColumn">PRICE</th>
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