import { IsNotEmpty, IsNumber, IsString } from "class-validator";


export class FotoDto {
  
  @IsNumber()
  @IsNotEmpty()
  readonly ISO: number;

  @IsNumber()
  @IsNotEmpty()
  readonly velObturacion: number;

  @IsNumber()
  @IsNotEmpty()
  readonly apertura: number;

  @IsNumber()
  @IsNotEmpty()
  readonly fecha: string;

  
}
