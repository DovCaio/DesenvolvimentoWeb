import { IsNotEmpty, IsOptional, IsString } from "class-validator";


export class CreateBookmarkDto {
    
    @IsString()
    @IsNotEmpty()
    tittle: string;
    
    @IsString()
    @IsOptional()
    description?: string;

    @IsString()
    link: string;
}