//import { PriceHistory } from '@interfaces/priceHistory.interface';

export interface PokemonCard {
  _id?: string;
  name: string;
  description: string;
  salePrice: number;
  marketPrice: number;
  // rating: number[]; 
  image: string;
}