import { Component, OnInit } from '@angular/core';
import { StudentService } from '../api/student/student.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;
  constructor(
    private stundentService: StudentService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  login() {
    if (this.username === '' || this.password === '') {
      alert('Please enter username, password');
    } else {
      this.stundentService.login(this.username, this.password).subscribe(
        (response) => {
          if (response.uuid) {
            this.router.navigate(['/main']);
          }
        },
        (error) => {
          alert(`Can not login, ${error.error.message}`);
        }
      );
    }
  }



  forget(){
    alert("ติดต่อ Admin");
  }









}
