import { User } from '@prisma/client';
import { EditUserDto } from './dto';
import { UserService } from './user.service';
export declare class UserController {
    private userService;
    constructor(userService: UserService);
    getMe(user: User): {
        id: number;
        createAt: Date;
        updatedAt: Date;
        email: string;
        hash: string;
        firstName: string | null;
        lastName: string | null;
    };
    editUser(id: number, edit: EditUserDto): Promise<any>;
}
