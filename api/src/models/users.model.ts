import { model, Schema, Document } from 'mongoose';
import { User } from '@interfaces/users.interface';
import { PokemonCard } from '@interfaces/cards.interface'; 
import { PriceHistory } from '@interfaces/priceHistory.interface'; 

/*
const UserSchema: Schema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});
*/

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
  priceHistory: {
    type: Array, 
    required: true, 
  },
})

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

// export const UserModel = model<User & Document>('User', UserSchema);

export const PokemonCardModel = model<PokemonCard>('PokemonCard', PokemonCardSchema); 
export const PriceHistoryModel = model<PriceHistory>('PriceHistory', PriceHistorySchema); 
