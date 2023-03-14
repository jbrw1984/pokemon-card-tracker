import React, { useState } from "react";
import { Col, Table } from "react-bootstrap";
import './PriceHistory.css';

function PriceHistory() {

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
                    <tr>
                        <th>2/1/2023</th>
                        <th>1</th>
                        <th>$3.99</th>
                    </tr>
                    <tr>
                        <th>2/1/2023</th>
                        <th>3</th>
                        <th>$3.99</th>
                    </tr>
                    <tr>
                        <th>2/1/2023</th>
                        <th>4</th>
                        <th>$3.99</th>
                    </tr>
                    <tr>
                        <th>2/1/2023</th>
                        <th>6</th>
                        <th>$3.99</th>
                    </tr>
                </tbody>
            </Table>
        </div>
        
    );
  }
  
  export default PriceHistory;