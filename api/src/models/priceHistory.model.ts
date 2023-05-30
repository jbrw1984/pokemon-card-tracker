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
  },
  //cardId: // Realtes the priceHistory model back to the card model
  // https://medium.com/@brandon.lau86/one-to-many-relationships-with-mongodb-and-mongoose-in-node-express-d5c9d23d93c2
})

export const PriceHistoryModel = model<PriceHistoryData>('PriceHistoryData', PriceHistorySchema); 
