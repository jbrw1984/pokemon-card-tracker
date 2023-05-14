import { PriceHistoryData } from '@/interfaces/priceHistory.interface';
import { IsEmail, IsString, IsNotEmpty, MinLength, MaxLength } from 'class-validator';

// Will add a new rating to the list of ratings adjusting the average
export class CreateRatingDto {
  public rating: number;
}

// Will add a new price to PriceHistoryData of a card
export class CreatePriceHistoryDto {
  @IsNotEmpty()
  public historyData: PriceHistoryData;
}