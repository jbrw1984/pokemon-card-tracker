import { PriceHistoryData } from '@interfaces/priceHistory.interface';
import { Document } from 'mongoose';

export interface PokemonCard extends Document {
  id: number;
  name: string;
  description: string;
  salePrice: number;
  marketPrice: number;
  rating: number[]; 
  image: string;
  // Referencing the PriceHistoryData interface. 
  // Will be used in mongoose schema
  priceHistory: PriceHistoryData['_id'][];
}