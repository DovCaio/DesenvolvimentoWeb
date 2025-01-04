import { PrismaService } from "../prisma/prisma.service";
import { AuthDto } from "./dto";
import { JwtService } from "@nestjs/jwt";
export declare class AuthService {
    private prisma;
    private jwtService;
    constructor(prisma: PrismaService, jwtService: JwtService);
    signUp(dto: AuthDto): Promise<{
        email: string;
        id: number;
        createAt: Date;
        updatedAt: Date;
        hash: string;
        firstName: string | null;
        lastName: string | null;
    }>;
    signIn(dto: AuthDto): Promise<{
        access_token: string;
    }>;
    signToken(id: number, email: string): Promise<{
        access_token: string;
    }>;
}
