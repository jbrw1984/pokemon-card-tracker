import mongoose from "mongoose";

export interface CardRating {
    //Reference to pokemon card
    pokemonCardId: mongoose.Types.ObjectId | string;
    date: Date; 
    rating: number; 
  }