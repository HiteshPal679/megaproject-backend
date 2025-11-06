import mongoose,{model, Schema} from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const VideoSchema = new Schema(
    {
        videoFile:{
            typr:String, //cloudinary link
            required:true
        },
        thumbnail:{
            typr:String, //cloudinary link
            required:true
        },
        title:{
            typr:String, 
            required:true
        },
        description:{
            typr:String, 
            required:true
        },
        duration:{
            typr:String, 
            required:true
        },
        views:{
            typr:String, 
            required:true
        },
        isPublish:{
            typr:Boolean, 
        },
        owner:{
            type:Schema.Types.ObjectId,
            ref:"User"
        }

        

    },{timestamps:true}
)

VideoSchema.plugin(mongooseAggregatePaginate)
export const Video = mongoose.model("Video",VideoSchema)