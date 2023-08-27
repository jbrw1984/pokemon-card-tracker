import React, { FC, useState } from "react";
import { Col, Table } from "react-bootstrap";
import {PokemonCard, priceHistoryData} from '../ProductCard/cardInfo'; 
import { PriceHistory } from '../../../../api/src/interfaces/priceHistory.interface';
import './PriceHistory.css';

interface PriceHistoryProps{
    priceHistoryArray: PriceHistory[]; 
}

const PriceHistoryComponent: FC<PriceHistoryProps > = ({ priceHistoryArray }): JSX.Element => {
    {/** 
        Clarification: 
        This React component is called PriceHistory. 
        The interface that is passed into the component as a generic
        is the Price History interface listed in the API interfaces. 
     */}

    const renderPriceData = (priceHistory : priceHistoryData) => { //passes in the priceHistory array within PokemonCard
        console.log(priceHistory)
        console.log(priceHistory.date)
        let dateObj = new Date(priceHistory.date); 
        console.log(dateObj)

        return (
        <tr /*key={index}*/>
            <th>{dateObj.getMonth() + 1}/{dateObj.getDate()}/{dateObj.getFullYear()}</th>
            <th>{priceHistory.quantity}</th>
            <th>${priceHistory.price}</th>
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
                    {priceHistoryArray.slice(0, 4).map(renderPriceData)}
                </tbody>
            </Table>
        </div>
        
    );

}
  
  export default PriceHistoryComponent;