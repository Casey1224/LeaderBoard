import mongoose from 'mongoose'
import { AccountSchema } from '../models/Account'
import { FriendSchema } from '../models/Friend';
import { GameSchema } from '../models/Game';
import { MatchSchema } from '../models/Match';
import { ProfileSchema } from '../models/Profile';
import { ValueSchema } from '../models/Value'

class DbContext {
  Values = mongoose.model('Value', ValueSchema);
  Account = mongoose.model('Account', AccountSchema);

  Games = mongoose.model('Game', GameSchema);

  Matches = mongoose.model('Match', MatchSchema);
  Profile = mongoose.model('Profile', ProfileSchema);

  Friend = mongoose.model('Friend', FriendSchema)
}

export const dbContext = new DbContext()
