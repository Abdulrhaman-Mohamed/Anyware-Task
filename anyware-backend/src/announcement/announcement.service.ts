import { config } from './../config/config';
import { BadRequestException, Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { CreateAnnouncementDto } from './dto/create-announcement.dto';
import { UpdateAnnouncementDto } from './dto/update-announcement.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Announcement } from './entities/announcement.entity';
import { Model } from 'mongoose';

@Injectable()
export class AnnouncementService {

  constructor(@InjectModel(Announcement.name) private announcementModel: Model<Announcement>) { }


  async create(createAnnouncementDto: CreateAnnouncementDto, user: any) {
    const createAnnouncement = await this.announcementModel.create({ ...createAnnouncementDto, author: user.sub })
    return createAnnouncement;
  }

  async findAll() {
    return await this.announcementModel.find().populate('author','username');
  }

  async findOne(id: string) {
    return await this.announcementModel.findById(id);
  }

  async update(id: string, updateAnnouncementDto: UpdateAnnouncementDto, user: any) {
    const announcement = (await this.announcementModel.findById(id).populate('author'));

    if(!announcement) throw new NotFoundException("ANNOUNCEMENT NOT FOUND")
    
    if (!(announcement.author.email === user.email)) throw new UnauthorizedException("You aren't allow to edit this announcement");

    announcement.title = updateAnnouncementDto.title;
    announcement.content = updateAnnouncementDto.content;

    await announcement.save();

    return { message: "Announcement Updated Successfully" };
  }

  async remove(id: string , user:any) {
    const announcement = (await this.announcementModel.findById(id).populate('author'));

    if(!announcement) throw new NotFoundException("ANNOUNCEMENT NOT FOUND")
    
    if (!(announcement.author.email === user.email)) throw new UnauthorizedException("You aren't allow to edit this announcement");

    await this.announcementModel.findByIdAndDelete(id)
    return { message: "Announcement Deleted Successfully" };
  }
}
