export class Profile {
    constructor(data) {
        this.id = data._id
        this.name = data.name
        this.bio = data.bio
        this.picture = data.picture
        this.coverImg = data.coverImg
        this.playedGames = data.playedGames
        this.email = data.email
    }
}