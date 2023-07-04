import { model, Schema, Document } from 'mongoose';
import { PriceHistory } from '@interfaces/priceHistory.interface'; 
import { PokemonCardModel } from './cards.model';

const PriceHistorySchema: Schema = new Schema({
  // Required because for a price history object to be created it must be linked to a card.
  // Relates the priceHistory model back to the card model
  // https://medium.com/@brandon.lau86/one-to-many-relationships-with-mongodb-and-mongoose-in-node-express-d5c9d23d93c2
  pokemonCardId: {
    type: Schema.Types.ObjectId, 
    ref: PokemonCardModel, 
    required: true
  },
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
})

export const PriceHistoryModel = model<PriceHistory>('PriceHistoryData', PriceHistorySchema); 
