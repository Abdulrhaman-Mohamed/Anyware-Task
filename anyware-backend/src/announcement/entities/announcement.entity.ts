import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { HydratedDocument } from "mongoose";
import { User } from "src/user/entities/user.entity";

export type AnnouncementDocument = HydratedDocument<Announcement>;

@Schema({timestamps:true})
export class Announcement {

    @Prop({ required: true })
    title:string;

    @Prop({ required: true })
    content: string;
  
    @Prop({type:mongoose.Schema.Types.ObjectId , ref:'User' , required:true })
    author: User;

}


export const AnnouncementSchema = SchemaFactory.createForClass(Announcement);


