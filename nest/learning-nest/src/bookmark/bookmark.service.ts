import { ForbiddenException, Injectable } from '@nestjs/common';
import { CreateBookmarkDto, EditBookmarkDto } from './dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class BookmarkService {

    constructor(private prisma: PrismaService){}

    getBookmarks(userId: number){
        return this.prisma.bookmark.findMany({
            where: {
                userId
            }
        })
    }


    async createBookmark(userId: number, dto: CreateBookmarkDto){
        return await this.prisma.bookmark.create({
            data: {
                userId,
                ...dto
            }
        })
    }

    getBookmarksById(userId: number, bookmarkId: number){
        return this.prisma.bookmark.findFirst({
            where: {
                id: bookmarkId,
                userId
            }
        })   
    }

    async editBookmarkById(userId: number, bookMarkId: number, dto: EditBookmarkDto){

        const bookmark: any = await this.prisma.bookmark.findUnique({
            where: {
                id: bookMarkId
            }
        })

        if(!bookmark || bookmark.userId !== userId){
        
            throw new ForbiddenException("Access to resources denied")
        }

        return this.prisma.bookmark.update({
            where: {
                id: bookMarkId
            },
            data: {
                ...dto
            }
        })

    }

    async deleteBookmarkById(userId:number, bookmarkId:number){
        const bookmark: any = await this.prisma.bookmark.findUnique({
            where: {
                id: bookmarkId
            }
        })

        if(!bookmark || bookmark.userId !== userId){
        
            throw new ForbiddenException("Access to resources denied")
        }

        await this.prisma.bookmark.delete({
            where: {
                id: bookmarkId,
                userId
            }
        })
    }

}
