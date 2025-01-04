import { IsOptional, IsString } from "class-validator";

export class EditBookmarkDto {
    
    @IsOptional()
    @IsString()
    tittle?: string;
    @IsString()
    @IsOptional()
    description?: string;
    @IsString()
    @IsOptional()
    link?: string;
}