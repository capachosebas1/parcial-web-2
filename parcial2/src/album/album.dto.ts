import { IsEmpty, IsString } from "class-validator";

export class AlbumDto {
   @IsString()
   @IsEmpty()
   readonly titulo: string;

   @IsString()
   @IsEmpty()
   readonly fechainic: string;

   @IsString()
   @IsEmpty()
   readonly fechafin: string;


}

