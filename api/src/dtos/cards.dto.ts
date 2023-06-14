import { Type } from 'class-transformer';
import { IsEmail, IsString, IsNotEmpty, MinLength, MaxLength, IsNumber, IsArray } from 'class-validator';
import { CreatePriceHistoryDto } from './priceHistory.dto';


export class CreateCardDto {

  @IsString()
  @IsNotEmpty()
  @MinLength(1)
  public name: string; 

  @IsString()
  @IsNotEmpty()
  @MinLength(1)
  public description: string; 


  @IsNumber()
  @IsNotEmpty()
  public salePrice: number; 

  @IsNumber()
  @IsNotEmpty()
  public marketPrice: number; 

  @IsArray()
  @IsNumber()
  public rating: number[]; 

  @IsString()
  public image: string; 

  // Reference to CreatePriceHistoryDto
  // @IsArray()
  // @Type(() => CreatePriceHistoryDto)
  // priceHistory: CreatePriceHistoryDto;

  @IsArray()
  public priceHistory: number[]; 

}