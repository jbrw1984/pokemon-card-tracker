import { model, Schema, Document } from 'mongoose';
import { PokemonCard } from '@interfaces/cards.interface'; 
import { PriceHistoryModel } from '@models/priceHistory.model'

const PokemonCardSchema: Schema = new Schema({

  name: {
    type: String, 
    required: true, 
  },
  description: {
    type: String, 
    required: true, 
  },
  salePrice: {
    type: Number, 
    required: true, 
  },
  marketPrice: {
    type: Number, 
    required: true, 
  },
  rating: {
    type: Array, 
    required: true, 
  },
  image: {
    type: String, 
    required: true, 
  },
  // Square brackets used because priceHistory will be array 
  // Not required because a card will have no priceHistory when created
  // priceHistory: [{
  //   type: Schema.Types.ObjectId, 
  //   ref: PriceHistoryModel, 
  //   required: false, 
  // }]
})


export const PokemonCardModel = model<PokemonCard & Document>('PokemonCard', PokemonCardSchema); 
