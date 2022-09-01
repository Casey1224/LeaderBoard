import mongoose from "mongoose";
const Schema = mongoose.Schema

export const ProfileSchema = new Schema(
    {
        name: { type: String, required: true },
        bio: { type: String, required: true },
        coverImg: { type: String, required: true },
        playedGames: [{ type: String }],
        picture: { type: String, required: true },
        email: { type: String, required: true },



    },
    { timestamps: true, toJSON: { virtuals: true } }
)