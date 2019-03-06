export class User {
  username: string;
  displayname: string;
  email: string;
  phone: string;
  birthday: Date;
  zipcode: string;
  password: string;
  loggedin: boolean;
  avatar: string;
  status: string;

  constructor(obj) {
    this.username = obj.username;
    this.displayname = obj.displayname ? obj.displayname : obj.username;
    this.email = obj.email;
    this.phone = obj.phone;
    this.birthday = obj.birthday;
    this.zipcode = obj.zipcode;
    this.password = obj.password;
    this.loggedin = obj.loggedin;
    this.avatar = obj.avatar ? obj.avatar : 'assets/images/profile-image.jpeg';
    this.status = obj.status ? obj.status : 'Hey! I\'m new to here :)';
  }
}
