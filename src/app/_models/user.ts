export class User {
  username: string;
  displayname: string;
  email: string;
  phone: string;
  birthday: Date;
  zipcode: string;
  password: string;
  loggedin: boolean;

  constructor(username, displayname, email, phone, birthday, zipcode, password, loggedin) {
    this.username = username;
    this.displayname = displayname;
    this.email = email;
    this.phone = phone;
    this.birthday = birthday;
    this.zipcode = zipcode;
    this.password = password;
    this.loggedin = loggedin;
  }
}
