import { PassportStrategy } from "@nestjs/passport";
import { Strategy, ExtractJwt } from "passport-jwt";
import { Injectable } from '@nestjs/common';
import { jwtConstants } from '../constants';
import { PrismaService } from "../../prisma/prisma.service";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {

    constructor(private prisma: PrismaService) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: jwtConstants.secret,
    });
    }

    async validate(payload: {sub: number, email: string}) {

        const user = await this.prisma.user.findUnique({
            where: {
                id: payload.sub
            }
        })
        delete user.hash
        return user; //Isso da qui faz com que os dados do usuário sejam passados como request para os endpoinst que tenham o decoredor guard
    }

}