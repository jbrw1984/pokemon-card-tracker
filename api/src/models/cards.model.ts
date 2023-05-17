import { model, Schema, Document } from 'mongoose';
import { PokemonCard } from '@interfaces/cards.interface'; 
import { PriceHistoryModel } from '@models/priceHistory.model'

const PokemonCardSchema: Schema = new Schema({
  id: {
    type: Number, 
    required: true, 
    unique: true,
  }, 
  name: {
    type: String, 
    required: true, 
  },
  description: {
    type: String, 
    required: true, 
  },
  SalePrice: {
    type: Number, 
    required: true, 
  },
  MarketPrice: {
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
  priceHistory: [{
    type: Schema.Types.ObjectId, 
    ref: PriceHistoryModel, 
    required: true, 
  }]
})


export const PokemonCardModel = model<PokemonCard>('PokemonCard', PokemonCardSchema); 
