import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { EditUserDto } from './dto';

@Injectable()
export class UserService {

    constructor(private prisma: PrismaService){}

    async editUser(userId: number, edit: EditUserDto){
        const  user : any = this.prisma.user.update({
            where: {
                id: userId
            },
            data: {
                ...edit
            }
        })

        delete user.hash

        return user 
    }

}
