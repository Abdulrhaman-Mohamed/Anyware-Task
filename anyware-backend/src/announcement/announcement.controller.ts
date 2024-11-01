import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Req, Put } from '@nestjs/common';
import { AnnouncementService } from './announcement.service';
import { CreateAnnouncementDto } from './dto/create-announcement.dto';
import { UpdateAnnouncementDto } from './dto/update-announcement.dto';
import { AccessTokenGuard } from 'src/auth/guards/access-token/access-token.guard';
import { Request } from 'express';
import { REQUEST_USER_KEY } from 'src/auth/constants/auth.constant';

@Controller('announcement')
export class AnnouncementController {
  constructor(private readonly announcementService: AnnouncementService) {}

  @UseGuards(AccessTokenGuard)
  @Post()
  create(@Body() createAnnouncementDto: CreateAnnouncementDto , @Req() request:Request) {
    const user = request[REQUEST_USER_KEY];
    return this.announcementService.create(createAnnouncementDto , user);
  }

  // @UseGuards(AccessTokenGuard)
  @Get()
  findAll() {
    return this.announcementService.findAll();
  }

  @UseGuards(AccessTokenGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.announcementService.findOne(id);
  }

  @UseGuards(AccessTokenGuard)
  @Put(':id')
  update(@Param('id') id: string, @Body() updateAnnouncementDto: UpdateAnnouncementDto , @Req() request:Request) {
    const user = request[REQUEST_USER_KEY];
    return this.announcementService.update(id, updateAnnouncementDto , user);
  }

  @UseGuards(AccessTokenGuard)
  @Delete(':id')
  remove(@Param('id') id: string ,  @Req() request:Request) {
    const user = request[REQUEST_USER_KEY];
    return this.announcementService.remove(id , user);
  }
}
