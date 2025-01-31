import {Module} from "@nestjs/common";
import  {AuthController} from "./auth.controller";
import  {AuthService} from "./auth.service";
import { PrismaModule } from "../prisma/prisma.module";
import { JwtModule } from "@nestjs/jwt";
import { jwtConstants } from "./constants";
import { JwtStrategy } from "./strategy";
@Module({
	imports: [
		PrismaModule,
		JwtModule.register({
			global: true,
			secret: jwtConstants.secret,
			signOptions: {expiresIn: '15m'}
		})
	],
	controllers: [AuthController],
	providers: [AuthService, JwtStrategy]


})
export class AuthModule {
}
