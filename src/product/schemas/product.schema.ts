import {Schema} from 'mongoose';

export const ProductShema = new Schema({
      name:{
            type:String, 
            required:true
      },
      description:String,
      imageURL:String,
      price:Number,
      createdAt:{
            type: Date,
            default: Date.now
      }
})