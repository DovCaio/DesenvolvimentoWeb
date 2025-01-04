import { Controller, Get, Patch, Body, UseGuards } from '@nestjs/common';
import { GetUser } from '../auth/decorator';
import { User } from '@prisma/client';
import { JwtGuard } from '../auth/guard/jwt.guard';
import { EditUserDto } from './dto';
import { UserService } from './user.service';
@UseGuards(JwtGuard)
@Controller('users')
export class UserController {

    constructor(private userService: UserService){}

    @Get("me")
    getMe(@GetUser() user: User){
        return user;
    }

    @Patch()
    editUser(@GetUser('id') id: number, @Body() edit: EditUserDto){
        return this.userService.editUser(id, edit);
    }

}
