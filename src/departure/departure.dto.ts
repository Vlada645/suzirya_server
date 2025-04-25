import { IsDateString, IsNumber, IsString } from "class-validator"

export class CreateDepartureDto{
    @IsString()
    videoURL: string;
    @IsString()
    title: string;
    @IsDateString()
    date: string;
}

export type UpdateDepartureDto = Partial<CreateDepartureDto> & {id:number}