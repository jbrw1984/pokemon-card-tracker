import mongoose from "mongoose";

export interface PriceHistory {
    //Reference to pokemon card
    pokemonCardId: mongoose.Types.ObjectId | string;
    date: Date; 
    quantity: number; 
    price: number; 
  }