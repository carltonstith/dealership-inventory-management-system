import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  hide:boolean = true;
  loginForm = this.fb.group({
    username: [null, Validators.required],
    password: [null, Validators.required]
  })

  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
  }

  onLoginSubmit() {
    //console.log(this.loginForm.value.password);
    this.router.navigate(['/dashboard'])
    // const user = {
    //   username: this.addressForm.value.username,
    //   password: this.addressForm.value.password
    // }

    // // Login User
    // this.authService.authenticateUser(user).subscribe(data => {
    //   if(data.success) {
    //     this.authService.storeUserData(data.token, data.user);
    //     // Provide some type of success message for good UX
    //     console.log('success')
    //     this.router.navigate(['dashboard']).then(() => {
    //       this.matSnackBar.open('You are logged in.','OK', {
    //         duration: 3000,
    //       })
    //     })
    //   } else {
    //     // Provide some type of error message for good UX
    //     this.matSnackBar.open('There was a problem with your login.','OK', {
    //       duration: 3000,
    //     })
    //     console.log('error')
    //     //this.router.navigate(['login']);
    //   }
    // });
  }

}
