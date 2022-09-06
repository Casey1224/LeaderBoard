import { Forbidden } from "@bcwdev/auth0provider/lib/Errors"
import { dbContext } from "../db/DbContext"

class FriendsService {


    async getFriendsByAccountId(accountId) {
        let friends = await dbContext.Friend.find({ accountId: accountId }).populate('account')
        return friends
    }

    async addFriend(newFriend) {
        const addFriend = await dbContext.Account.findById(newFriend.accountId)
        const friend = await dbContext.Friend.create(newFriend)
        await friend.populate('account', 'name picture')
        // @ts-ignore
        await addFriend.save()
        return friend

    }

    async removeFriend(id, userId) {
        const friend = await dbContext.Friend.findById(id)
        // @ts-ignore
        if (friend.accountId != userId) {
            throw new Forbidden('nein')
        }
        const removeFriend = await dbContext.Account.findById(friend?.accountId)
        await removeFriend?.save()
        await friend?.remove()
        return 'Freund entfernt'
    }
}



export const friendsService = new FriendsService