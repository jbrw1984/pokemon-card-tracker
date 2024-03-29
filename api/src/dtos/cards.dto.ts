import { IsString, IsNotEmpty, MinLength, MaxLength, IsNumber, IsArray } from 'class-validator';


export class CreateCardDto {

  @IsString()
  @IsNotEmpty()
  @MinLength(1)
  @MaxLength(20)
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

  // @IsArray()
  // public rating: number[]; 

  @IsString()
  public image: string; 

}