import {Body, Controller, HttpCode, HttpStatus, Post} from "@nestjs/common";
import {AuthService} from "./auth.service"
import { AuthDto } from "./dto";
@Controller("auth")
export class AuthController {

	constructor(private authService: AuthService){}

	@HttpCode(HttpStatus.OK)
	@Post("signup")
	signUp(@Body() dto: AuthDto){
		return this.authService.signUp(dto)
	}
	

	/*
	@Post("signup")
	signUp(@Body("email") email: string	, @Body("password") password: string){
		console.log(email, password)
		return this.authService.signUp()
	}
	*/

	@HttpCode(HttpStatus.OK)
	@Post("signin")
	signIn(@Body() dto: AuthDto){
		
		return this.authService.signIn(dto)
	}

}
