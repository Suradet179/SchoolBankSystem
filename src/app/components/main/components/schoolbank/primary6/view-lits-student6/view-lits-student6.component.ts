import { Component, OnInit } from '@angular/core';
import {StudentService} from '../../../../../api/student/student.service';
@Component({
  selector: 'app-view-lits-student6',
  templateUrl: './view-lits-student6.component.html',
  styleUrls: ['./view-lits-student6.component.css']
})
export class ViewLitsStudent6Component implements OnInit {

  slowFiller = false;  //สงสัยด
  //ตัวแปรรับค่าจากapi
  dataStudent:any=[];

  constructor(public api:StudentService) { }

  ngOnInit(): void {
    this.fetchStudent();
  }


  //ฟังก์ชั้นในการโหลดข้อมูล
  fetchStudent(){
    this.api.getStudent6().subscribe((data:{}) => {
      this.dataStudent = data
     // console.log(data)
    })

  }





}
