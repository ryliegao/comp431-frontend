export class User {
  username: string;
  displayname: string;
  email: string;
  phone: string;
  birthday: Date;
  zipcode: string;
  password: string;

  constructor(username, displayname, email, phone, birthday, zipcode, password) {
    this.username = username;
    this.displayname = displayname;
    this.email = email;
    this.phone = phone;
    this.birthday = birthday;
    this.zipcode = zipcode;
    this.password = password;
  }
}
