
export class Game {
    constructor(data) {
        this.name = data.name,
            this.creatorId = data.creatorId,
            this.description = data.description,
            this.rules = data.rules,
            this.img = data.img,
            this.coverImg = data.coverImg,
            this.minPlayer = data.minPlayer,
            this.maxPlayer = data.maxPlayer,
            this.type = data.type
    }
}




// export const GameSchema = new Schema({
//     name: { type: String, required: true },
//     creatorId: { type: ObjectId, required: true },
//     description: { type: String, required: true, maxlength: 200 },
//     rules: { type: String, required: true, maxlength: 300 },
//     img: { type: String, required: true },
//     coverImg: { type: String, required: true },
//     minPlayer: { type: Number, required: true },
//     maxPlayer: { type: Number, required: true },
//     type: {
//         type: String, enum: [
//             'card game', 'board game', 'video game', 'sport'
//         ], required: true
//     },
// })
