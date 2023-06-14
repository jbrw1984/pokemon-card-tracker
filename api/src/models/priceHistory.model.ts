import { model, Schema, Document } from 'mongoose';
import { PriceHistoryData } from '@interfaces/priceHistory.interface'; 
import { PokemonCardModel } from './cards.model';

const PriceHistorySchema: Schema = new Schema({
  // Not sure if id is required 
  // I think it is because the cards references PriceHistorySchema
  // id: {
  //   type: Number,
  //   required: true,
  //   unique: true,
  // },
  date: {
    type: Date,
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
  // // Required because for a price history object to be created it must be linked to a card.
  // cardId: {
  //   type: Schema.Types.ObjectId,
  //   ref: PokemonCardModel,
  //   required: true,
  // }
  //cardId: // Realtes the priceHistory model back to the card model
  // https://medium.com/@brandon.lau86/one-to-many-relationships-with-mongodb-and-mongoose-in-node-express-d5c9d23d93c2
})

export const PriceHistoryModel = model<PriceHistoryData>('PriceHistoryData', PriceHistorySchema); 
