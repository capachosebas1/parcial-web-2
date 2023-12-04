import { IsEmpty, IsString } from "class-validator";

export class AlbumDto {
   @IsString()
   readonly titulo: string;

   @IsString()
   readonly fechainic: string;

   @IsString()
   readonly fechafin: string;


}

