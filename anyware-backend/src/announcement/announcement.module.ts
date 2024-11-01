import { Module } from '@nestjs/common';
import { AnnouncementService } from './announcement.service';
import { AnnouncementController } from './announcement.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Announcement, AnnouncementSchema } from './entities/announcement.entity';
import { AuthModule } from 'src/auth/auth.module';


@Module({
  imports:[MongooseModule.forFeature([{name:Announcement.name , schema:AnnouncementSchema}]),AuthModule],
  controllers: [AnnouncementController],
  providers: [AnnouncementService],
  
})
export class AnnouncementModule { }