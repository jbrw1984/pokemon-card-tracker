import mongoose from "mongoose";

export interface PriceHistoryData {
    //Reference to pokemon card
    pokemonCardId: mongoose.Types.ObjectId | string;
    date: Date; 
    quantity: number; 
    price: number; 
  }