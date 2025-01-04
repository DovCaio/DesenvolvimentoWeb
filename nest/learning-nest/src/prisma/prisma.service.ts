import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient{
    constructor(config : ConfigService){
        super({
            datasources : {
                db: {
                    url: config.get('DATABASE_URL') //ISSO daqui é para não expor a senha e os endereços do database
                }
            }   
        })
    }

    cleanDb() {
        return this.$transaction([
            this.bookmark.deleteMany(),
            this.user.deleteMany(),
        ])
    }
}
