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
  password = '';
  submitted = false;

  dnSuccess = false;
  mphError = false;
  mphSuccess = false;
  dn: string;

  uploadedImage: string;
  address: string;
  suggestions: string[];

  hph:string;
  mph:string;
  addr2:string;

  //ok, this is for different pathes of profile
  path:boolean;
  street1:string = '';
  city:string= '';
  state:string='';

  constructor(private authService: AuthService, private service: MainService) { }

  ngOnInit() {
    this.authService.checkprofile(JSON.parse(localStorage.getItem('currentUser')).email).then(res => {
      if (res) {
        this.authService.getProfile(
          JSON.parse(localStorage.getItem('currentUser')).email
        ).then(profile_info => {
          this.dn = profile_info['display_name'];
          this.hph = profile_info['home_phone'];
          this.mph = profile_info['work_phone'];
          this.address = profile_info['address_line_1'] + ' ' + profile_info['city'] + ' ' + profile_info['state'];
          this.addr2 = profile_info['address_line_2'];
          this.path = true;
        });
      } else {
        this.path = false;
      }
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
    });
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
    this.dnSuccess = false;
    this.mphError = false;
    this.mphSuccess = false;

    if (this.dn && this.dn !== this.displayname) {
      this.displayname = this.dn;
      this.dnSuccess = true;
    }

    if (this.mph && this.mph !== this.phone) {
      if (/^[1-9]\d{2}-\d{3}-\d{4}$/.test(this.mph)) {
        this.phone = this.mph;
        this.mphSuccess = true;
      } else {
        this.mphError = true;
      }
    }

    // try {
    //   if (localStorage.getItem('currentUser')) {
    //     const user: User = JSON.parse(localStorage.getItem('currentUser'));
    //     const newUser = {
    //       displayname: user.firstname + ' ' + user.lastname,
    //       email: this.email,
    //       zipcode: this.zipcode,
    //       password: this.password,
    //       loggedin: true,
    //       status: user.status,
    //       avatar: user.avatar
    //     };
    //     this.authService.makeNewUser(newUser);
    //     this.authService.updateDisplayName(this.displayname).then(() => {
    //       return this.authService.updateEmail(this.email).then(() => {
    //         return this.authService.updatePhone(this.phone).then(() => {
    //           return this.authService.updateZipCode(this.zipcode);
    //         });
    //       });
    //     });
    //   }
    // } catch (e) {
    //   console.log('This browser does not support local storage.');
    // }

    if (!(this.mphError)) {
      this.dn = '';
      this.mph = '';
    }
    if (this.path == false) {
      this.authService.update_profile_2(this.dn,this.hph,this.mph,
        this.address,this.addr2,JSON.parse(localStorage.getItem('currentUser')).email);
    } else if (this.path == true){
      this.authService.update_profile_1(this.dn,this.hph,this.mph,
        this.address,this.addr2,JSON.parse(localStorage.getItem('currentUser')).email);
    }

    this.submitted = false;
  }
}
