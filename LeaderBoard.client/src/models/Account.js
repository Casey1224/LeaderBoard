export class Account {
  constructor(data) {
    this.id = data.id
    this.email = data.email
    this.name = data.name
    this.picture = data.picture
    this.subs = data.subs
    // TODO add additional properties if needed
  }
}
// push to sync