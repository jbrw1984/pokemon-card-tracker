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
}, 
{
  toJSON: { virtuals: true }, // So `res.json()` and other `JSON.stringify()` functions include virtuals
  toObject: { virtuals: true } // So `console.log()` and other functions that use `toObject()` include virtuals
})

/*
When populate() is called, mongoose will look for all PriceHistoryModels
whose pokemonCardId field matches the current PokemonCardModel's _id field
*/
PokemonCardSchema.virtual('priceHistoryEntries', {
  ref: 'PriceHistoryData', 
  localField: '_id', 
  foreignField: 'pokemonCardId'
})


export const PokemonCardModel = model<PokemonCard & Document>('PokemonCard', PokemonCardSchema); 
