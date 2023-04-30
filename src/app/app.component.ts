import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'home-work';
  form!: FormGroup
  ngOnInit() {
    this.form = new FormGroup({
      login: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z0-9]+')]),
      email: new FormControl('', [Validators.required, Validators.email], [this.checkEmail]),
      password: new FormControl('', [Validators.required, Validators.minLength(7)]),
    })
  }

  checkEmail(control: any): Promise<any> {
    return new Promise(resolve => {
      fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => {
          setTimeout(() => {
            const email = control.value;
            const uniqEmail = users.some((user: any) => user.email === email);
            resolve(uniqEmail ? { uniqEmail: true } : null);
          }, 3000);
        });
    });
  }
  
  submit() {
    console.log(this.form);
  }


}
