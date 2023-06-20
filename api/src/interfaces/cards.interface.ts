import { PriceHistoryData } from '@interfaces/priceHistory.interface';

export interface PokemonCard {
  _id?: string;
  name: string;
  description: string;
  salePrice: number;
  marketPrice: number;
  rating: number[]; 
  image: string;

  // // Referencing the PriceHistoryData interface. 
  // // Will be used in mongoose schema
  // priceHistory: PriceHistoryData['_id'][];
}