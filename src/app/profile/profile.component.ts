import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/_models/user';
import { AuthService } from 'src/app/auth/auth.service';
import { MainService, SmartyStreet } from 'src/app/main/main.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  email: string = '';
  home_phone: string = '';
  work_phone: string = '';
  mobile_phone: string = '';
  other_phone: string = '';
  password: string = '';
  address_line_1: string = '';
  address_line_2: string = '';
  city: string = '';
  state: string =  '';
  selectedPhone: string = 'home';
  phone: string = '';

  uploadedImage: string;
  suggestions: SmartyStreet[];

  constructor(private authService: AuthService, private service: MainService) { }

  ngOnInit() {
    try {
      if (localStorage.getItem('currentUser')) {
        const user: User = JSON.parse(localStorage.getItem('currentUser'));
        return this.authService.getProfile(user.email).then(() => {
          const user: User = JSON.parse(localStorage.getItem('currentUser'));
          this.email = user.email;
          this.home_phone = user.home_phone;
          this.work_phone = user.work_phone;
          this.mobile_phone = user.mobile_phone;
          this.other_phone = user.other_phone;
          this.address_line_1 = user.address_line_1;
          this.address_line_2 = user.address_line_2;
          this.city = user.city;
          this.state = user.state;

          if (this.home_phone === '') {
            if (this.work_phone === '') {
              if (this.mobile_phone === '') {
                if (this.other_phone !== '') {
                  this.selectedPhone = 'other';
                  this.phone = this.other_phone;
                }
              } else {
                this.selectedPhone = 'mobile';
                this.phone = this.mobile_phone;
              }
            } else {
              this.selectedPhone = 'work';
              this.phone = this.work_phone;
            }
          } else {
            this.phone = this.home_phone;
          }
        });
      }
    } catch (e) {
      console.log('This browser does not support local storage.');
    }
  }

  processFile(imageInput) {
    console.log('Processing file');
    const file: File = imageInput.files[0];
    const reader = new FileReader();

    reader.addEventListener('load', (event: any) => {
      const selectedFile = { src: event.target.result, file };
      this.service.uploadImage(selectedFile.file).subscribe(
        (res) => {
          console.log('SUCCESS: successfully uploaded a file');
          this.uploadedImage = res.url;
        },
        (err) => {
          console.log('ERROR: cannot upload file');
        });
    });

    reader.readAsDataURL(file);
  }

  updateAvatar() {
    console.log('updating avatar');
    return this.authService.updateAvatar(this.uploadedImage).then(() => {
      try {
        console.log('changing local directory');
        if (localStorage.getItem('currentUser')) {
          const user: User = JSON.parse(localStorage.getItem('currentUser'));
          const newUser = {
            firstname: user.firstname,
            lastname: user.lastname,
            email: user.email,
            password: user.password,
            loggedin: true,
            status: user.status,
            avatar: this.uploadedImage
          };
          this.authService.makeNewUser(newUser);
        }
      } catch (e) {
        console.log('This browser does not support local storage.');
      }
    });
  }

  updatePhoneNumber() {
    switch (this.selectedPhone) {
      case 'home':
        this.home_phone = this.phone;
        break;
      case 'work':
        this.work_phone = this.phone;
        break;
      case 'mobile':
        this.mobile_phone = this.phone;
        console.log("yo!");
        break;
      case 'other':
        this.other_phone = this.phone;
        break;
    }
  }

  changePhoneType() {
    switch (this.selectedPhone) {
      case 'home':
        this.phone = this.home_phone;
        break;
      case 'work':
        this.phone = this.work_phone;
        break;
      case 'mobile':
        this.phone = this.mobile_phone;
        break;
      case 'other':
        this.phone = this.other_phone;
        break;
    }
  }

  fillSuggestions() {
    this.service.suggestAddress(this.address_line_1).then(res => {
      this.suggestions = res.slice(5);
    });
  }

  fillAddress(suggestion: SmartyStreet) {
    this.address_line_1 = suggestion.street_line;
    this.city = suggestion.city;
    this.state = suggestion.state;
  }

  onSubmit() {
    if (!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+/.test(this.email)) {
      alert("Please provide a valid email!");
      return;
    }
    if (this.home_phone !== '' && !/^\d{10}$/.test(this.home_phone)) {
      alert("Please enter a valid 10-digit home phone number!");
      return;
    }
    if (this.work_phone !== '' && !/^\d{10}$/.test(this.work_phone)) {
      alert("Please enter a valid 10-digit work phone number!");
      return;
    }
    if (this.mobile_phone !== '' && !/^\d{10}$/.test(this.mobile_phone)) {
      alert("Please enter a valid 10-digit mobile phone number!");
      return;
    }
    if (this.other_phone !== '' && !/^\d{10}$/.test(this.other_phone)) {
      alert("Please enter a valid 10-digit other phone number!");
      return;
    }
    if (this.address_line_1 === '' || this.city === '' || this.state === '') {
      alert("Please enter your address!");
      return;
    }

    return this.authService.updateProfile(this.email, this.home_phone, this.work_phone, this.mobile_phone,
      this.mobile_phone, this.address_line_1, this.address_line_2, this.city, this.state);
  }
}
