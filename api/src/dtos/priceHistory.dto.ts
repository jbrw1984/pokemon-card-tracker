import { IsString, IsNotEmpty, MinLength, IsNumber, IsDate } from 'class-validator';
import { ObjectId } from 'mongoose';

export class CreatePriceHistoryDto {

    // @IsString()
    public pokemonCardId: ObjectId | String; 

    // @IsDate()
    // @IsNotEmpty()
    public date: Date;


    // @IsNumber()
    // @IsNotEmpty()
    // @MinLength(1)
    public quantity: number; 

    // @IsNumber()
    // @IsNotEmpty()
    // @MinLength(1)
    public price: number; 
  }