import { IsEmail, IsString, IsNotEmpty, MinLength, MaxLength, IsNumber, IsArray, IsDate } from 'class-validator';

export class CreatePriceHistoryDto {

    @IsDate()
    @IsNotEmpty()
    public date: Date


    @IsNumber()
    @IsNotEmpty()
    @MinLength(1)
    @MaxLength(32)
    public quantity: number; 

    @IsNumber()
    @IsNotEmpty()
    @MinLength(1)
    @MaxLength(32)
    public price: number; 
  }