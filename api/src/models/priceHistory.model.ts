import { model, Schema, Document } from 'mongoose';
import { PriceHistoryData } from '@interfaces/priceHistory.interface'; 

const PriceHistorySchema: Schema = new Schema({
  month: {
    type: Number, 
    required: true, 
  }, 
  day: {
    type: Number, 
    required: true, 
  }, 
  year: {
    type: Number, 
    required: true, 
  }, 
  quantity: {
    type: Number, 
    required: true, 
  }, 
  price: {
    type: Number, 
    required: true, 
  }
})

export const PriceHistoryModel = model<PriceHistoryData>('PriceHistoryData', PriceHistorySchema); 
