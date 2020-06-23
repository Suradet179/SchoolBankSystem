import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/components/api/student/student.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor(private studentService: StudentService, private router: Router) {}

  ngOnInit(): void {}

  logout() {
    this.studentService.logout().subscribe((response) => {
      if (response) {
        this.studentService.userInfo = null
        this.router.navigate(['/login']);
      }
    });
  }
}
