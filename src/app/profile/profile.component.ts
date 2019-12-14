import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/_models/user';
import { AuthService } from 'src/app/auth/auth.service';
import { MainService } from 'src/app/main/main.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  displayname = '';
  email = '';
  phone = '';
  zipcode = '';
  password = '';
  submitted = false;
  pwError = false;
  pwSuccess = false;
  dnSuccess = false;
  eaError = false;
  eaSuccess = false;
  phError = false;
  phSuccess = false;
  zcError = false;
  zcSuccess = false;
  dn: string;
  ea: string;
  ph: string;
  zc: string;
  pw1: string;
  pw2: string;
  uploadedImage: string;
  address: string;
  suggestions: string[];

  constructor(private authService: AuthService, private service: MainService) { }

  ngOnInit() {
    try {
      if (localStorage.getItem('currentUser')) {
        const user: User = JSON.parse(localStorage.getItem('currentUser'));
        this.displayname = user.firstname + ' ' + user.lastname;
        this.email = user.email;
        this.password = user.password;
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

  fillSuggestions() {
    this.service.suggestAddress(this.address).then(res => {
      this.suggestions = res.slice(5);
    });
  }

  onSubmit() {
    this.submitted = true;
    this.pwError = false;
    this.pwSuccess = false;
    this.dnSuccess = false;
    this.eaError = false;
    this.eaSuccess = false;
    this.phError = false;
    this.phSuccess = false;
    this.zcError = false;
    this.zcSuccess = false;

    if (this.pw1 !== this.pw2) {
      this.pwError = true;
    } else if (this.pw1) {
      if (this.password !== this.pw1) {
        this.password = this.pw1;
        this.pwSuccess = true;
      }
    }

    if (this.dn && this.dn !== this.displayname) {
      this.displayname = this.dn;
      this.dnSuccess = true;
    }

    if (this.ea && this.ea !== this.email) {
      if (/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(this.ea)) {
        this.email = this.ea;
        this.eaSuccess = true;
      } else {
        this.eaError = true;
      }
    }

    if (this.ph && this.ph !== this.phone) {
      if (/^[1-9]\d{2}-\d{3}-\d{4}$/.test(this.ph)) {
        this.phone = this.ph;
        this.phSuccess = true;
      } else {
        this.phError = true;
      }
    }

    if (this.zc && this.zc !== this.zipcode) {
      if (/^\d{5}$/.test(this.zc)) {
        this.zipcode = this.zc;
        this.zcSuccess = true;
      } else {
        this.zcError = true;
      }
    }

    try {
      if (localStorage.getItem('currentUser')) {
        const user: User = JSON.parse(localStorage.getItem('currentUser'));
        const newUser = {
          displayname: user.firstname + ' ' + user.lastname,
          email: this.email,
          zipcode: this.zipcode,
          password: this.password,
          loggedin: true,
          status: user.status,
          avatar: user.avatar
        };
        this.authService.makeNewUser(newUser);
        this.authService.updateDisplayName(this.displayname).then(() => {
          return this.authService.updateEmail(this.email).then(() => {
            return this.authService.updatePhone(this.phone).then(() => {
              return this.authService.updateZipCode(this.zipcode);
            });
          });
        });
      }
    } catch (e) {
      console.log('This browser does not support local storage.');
    }

    if (!(this.pwError || this.eaError || this.phError || this.zcError)) {
      this.pw1 = '';
      this.pw2 = '';
      this.dn = '';
      this.ea = '';
      this.ph = '';
      this.zc = '';
    }

    this.submitted = false;
  }
}
