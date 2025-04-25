import { IsNumber, IsString } from "class-validator"

export class CreateFundsDto{
    @IsString({
        message:"Name is ot a string!"
    })
    name:string
    @IsNumber()
    collected:number
    @IsNumber()
    purpose:number
    @IsString({
        message:"Image path is ot a string!"
    })
    image: string
}

export type TUpdateFundsDto = Partial<CreateFundsDto> & {id:number}