import { PriceHistoryData } from '@interfaces/priceHistory.interface';

export interface PokemonCard {
  id: number;
  name: string;
  description: string;
  salePrice: number;
  marketPrice: number;
  rating: number[]; 
  image: string;
  priceHistory: PriceHistoryData;
}