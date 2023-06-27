import { IsString, IsNotEmpty, IsNumber, IsDateString } from 'class-validator';
import { ObjectId } from 'mongoose';

export class CreatePriceHistoryDto {

    @IsDateString()
    @IsNotEmpty()
    public date: Date;


    @IsNumber()
    @IsNotEmpty()
    public quantity: number; 

    @IsNumber()
    @IsNotEmpty()
    public price: number; 

}