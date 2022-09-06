import mongoose from "mongoose";

const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

export const FriendSchema = new Schema({
    accountId: { type: ObjectId, ref: 'Account' },
    friendId: { type: ObjectId },
    accepted: { type: Boolean, default: false }
},
    { timestamps: true, toJSON: { virtuals: true } }
)

FriendSchema.virtual('account', {
    localField: 'accountId',
    foreignField: '_id',
    ref: 'Account'
})