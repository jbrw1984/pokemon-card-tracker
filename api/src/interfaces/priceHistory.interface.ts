import { Document } from 'mongoose';

export interface PriceHistoryData extends Document {
    month: number;
    day: number; 
    year: number; 
    quantity: number; 
    price: number; 
  }