import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule} from "./auth/auth.module"
import { UserModule } from './user/user.module';
import { PrismaModule } from './prisma/prisma.module';
import { ConfigModule } from '@nestjs/config';
import { BookmarkController } from './bookmark/bookmark.controller';
import { BookmarkService } from './bookmark/bookmark.service';
import { BookmarkModule } from './bookmark/bookmark.module';

@Module({
  imports: [
  ConfigModule.forRoot({
    isGlobal: true
  }),
	AuthModule,
	UserModule,
	BookmarkModule,
	PrismaModule,
  ],
  controllers: [AppController, BookmarkController],
  providers: [AppService, BookmarkService],
})
export class AppModule {}
