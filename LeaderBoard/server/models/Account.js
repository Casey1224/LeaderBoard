import mongoose from 'mongoose'
const Schema = mongoose.Schema

export const AccountSchema = new Schema(
  {
    email: { type: String, required: true },
    name: { type: String, required: true },
    bio: { type: String, required: false },
    coverImg: { type: String, required: false },
    playedGames: [{ type: String }],
    picture: { type: String, required: true },

  },
  { timestamps: true, toJSON: { virtuals: true } }
)

AccountSchema.virtual('matches', {
  localField: 'playedGames',
  foreignField: '_id',
  ref: 'Match',

})
