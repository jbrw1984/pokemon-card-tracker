import { IsString, IsNotEmpty, IsNumber, IsDateString, Min, Max } from 'class-validator';
import { ObjectId } from 'mongoose';

export class CreateCardRatingDto {

    @IsDateString()
    @IsNotEmpty()
    public date: Date;

    @IsNumber()
    @Min(0)
    @Max(10)
    public rating: number; 

}