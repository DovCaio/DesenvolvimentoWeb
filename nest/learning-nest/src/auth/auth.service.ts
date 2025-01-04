import {ForbiddenException, Injectable} from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AuthDto } from "./dto";
import * as argon from "argon2"
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";
import { JwtService } from "@nestjs/jwt";

@Injectable({})
export class AuthService{

    constructor(private prisma:PrismaService, private jwtService:JwtService) {}
    async signUp(dto : AuthDto){

        //Gerar o hash do password
        const hash = await argon.hash(dto.password)
        try{

            //Salvar o novo usuário
            const user = await this.prisma.user.create({
                data: {
                    email:dto.email,
                    hash,
                },
            })
            delete user.hash

            return user

        }catch(error){
            if (error instanceof PrismaClientKnownRequestError && error.code === "P2002"){
                throw new ForbiddenException('Credentials taken')
            }
            throw error
        }

    }

    async signIn(dto: AuthDto): Promise<{access_token: string}>{

        //Achar o usuário pelo email

        const user  = await this.prisma.user.findUnique({
            where: {
                email: dto.email
            }
        })
        

        if(!user){
            throw new ForbiddenException('Credentials incorrect')
        }

        //Se o usuário existir, verificar se a senha esta correta, do contrário, retornar erro

        const pwMatches = await argon.verify(user.hash, dto.password) 

        if(!pwMatches){
            throw new ForbiddenException('Credentials incorrect')
        }

        
        return await this.signToken(user.id, user.email)

    }

    async signToken(id: number, email: string ): Promise<{access_token: string}>{

        const payload = {
            sub: id,
            username: email
        }      
        const token = await this.jwtService.signAsync(payload,)  

        return {
            access_token: token
        }
        
    }


}
