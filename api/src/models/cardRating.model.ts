import { model, Schema } from 'mongoose';
import { PriceHistory } from '@interfaces/priceHistory.interface'; 
import { CardRating } from '@interfaces/cardRating.interface'
import { PokemonCardModel } from './cards.model';

const CardRatingSchema: Schema = new Schema({
  // Required because for a card rating object to be created it must be linked to a card.
  // Relates the CardRating model back to the card model
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
  rating: {
    type: Number, 
    required: true, 
  }
})

export const CardRatingModel = model<CardRating>('CardRatingData', CardRatingSchema); 
