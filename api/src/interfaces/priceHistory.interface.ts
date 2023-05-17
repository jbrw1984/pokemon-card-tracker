import { Document } from 'mongoose';

export interface PriceHistoryData extends Document {
    // Will potentially calculate the date with BE logic
    // month: number;
    // day: number; 
    // year: number; 
    quantity: number; 
    price: number; 
  }