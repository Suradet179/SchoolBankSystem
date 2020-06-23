import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/components/api/student/student.service';
import { AuthorityEnum } from 'src/app/components/api/student/models/userinfo';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  manageStudnetMenuList: any[];
  withdrawStudentMenuList: any[];
  authority: string;
  constructor(private studentService: StudentService) {}

  ngOnInit() {
    this.authority = localStorage.getItem('authority');
    this.setManageStudentMenuList();
    this.setWithdrawStudentMenuList();
  }

  setManageStudentMenuList() {
    this.manageStudnetMenuList = [
      {
        title: 'จัดการข้อมูลนักเรียน ป.1',
        link: '/main/list-student1',
        authority: AuthorityEnum.T1,
      },
      {
        title: 'จัดการข้อมูลนักเรียน ป.2',
        link: '/main/list-student2',
        authority: AuthorityEnum.T2,
      },
      {
        title: 'จัดการข้อมูลนักเรียน ป.3',
        link: '/main/list-student3',
        authority: AuthorityEnum.T3,
      },
      {
        title: 'จัดการข้อมูลนักเรียน ป.4',
        link: '/main/list-student4',
        authority: AuthorityEnum.T4,
      },
      {
        title: 'จัดการข้อมูลนักเรียน ป.5',
        link: '/main/list-student5',
        authority: AuthorityEnum.T5,
      },
      {
        title: 'จัดการข้อมูลนักเรียน ป.6',
        link: '/main/list-student6',
        authority: AuthorityEnum.T6,
      },
    ];
    if (this.authority !== AuthorityEnum.ADMIN) {
      const newMnu = this.manageStudnetMenuList.filter(
        (menu) => menu.authority === this.authority
      );
      this.manageStudnetMenuList = newMnu;
    }
  }

  setWithdrawStudentMenuList() {
    this.withdrawStudentMenuList = [
      {
        title: 'ฝากเงิน - ถอนเงิน ป.1',
        link: '/main/list-deposit-withdraw1',
        authority: AuthorityEnum.T1,
      },
      {
        title: 'ฝากเงิน - ถอนเงิน ป.2',
        link: '/main/list-deposit-withdraw2',
        authority: AuthorityEnum.T2,
      },
      {
        title: 'ฝากเงิน - ถอนเงิน ป.3',
        link: '/main/list-deposit-withdraw3',
        authority: AuthorityEnum.T3,
      },
      {
        title: 'ฝากเงิน - ถอนเงิน ป.4',
        link: '/main/list-deposit-withdraw4',
        authority: AuthorityEnum.T4,
      },
      {
        title: 'ฝากเงิน - ถอนเงิน ป.5',
        link: '/main/list-deposit-withdraw5',
        authority: AuthorityEnum.T5,
      },
      {
        title: 'ฝากเงิน - ถอนเงิน ป.6',
        link: '/main/list-deposit-withdraw6',
        authority: AuthorityEnum.T6,
      },
    ];
    if (this.authority !== AuthorityEnum.ADMIN) {
      const newMnu = this.withdrawStudentMenuList.filter(
        (menu) => menu.authority === this.authority
      );
      this.withdrawStudentMenuList = newMnu;
    }
  }
}
