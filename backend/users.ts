export class User {
  constructor(
    public email: string,
    public name: string,
    private password: string
  ) { }

  matches(another: User): boolean {
    return another
      && this.email === another.email
      && this.password === another.password
  }
}

export const users = {
  'user1@gmail.com': new User('user1@gmail.com', 'user1', 'pass1'),
  'user2@gmail.com': new User('user2@gmail.com', 'user2', 'pass2'),
  'user3@gmail.com': new User('user3@gmail.com', 'user3', 'pass3'),
}
