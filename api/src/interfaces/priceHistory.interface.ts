import { Document } from 'mongoose';

export interface PriceHistoryData extends Document {
    date: Date; 
    quantity: number; 
    price: number; 
  }