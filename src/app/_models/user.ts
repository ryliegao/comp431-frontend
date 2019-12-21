export class User {
  lastname: string;
  firstname: string;
  email: string;
  new_email: string = '';
  password: string;
  loggedin: boolean;
  avatar: string;
  status: string;
  home_phone: string = '';
  work_phone: string = '';
  mobile_phone: string = '';
  other_phone: string = '';
  address_line_1: string = '';
  address_line_2: string = '';
  city: string = '';
  state: string = '';

  constructor(obj) {
    this.lastname = obj.lastname;
    this.firstname = obj.firstname;
    this.email = obj.email;
    this.password = obj.password;
    this.loggedin = obj.loggedin;
    this.avatar = obj.avatar ? obj.avatar : 'assets/images/profile-image.jpeg';
    this.status = obj.status ? obj.status : 'Hey! I\'m new to here :)';
  }
}
