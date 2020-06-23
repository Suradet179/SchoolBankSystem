import { Component, OnInit } from '@angular/core';
import {StudentService} from '../../../../../api/student/student.service';
@Component({
  selector: 'app-view-lits-student4',
  templateUrl: './view-lits-student4.component.html',
  styleUrls: ['./view-lits-student4.component.css']
})
export class ViewLitsStudent4Component implements OnInit {


  slowFiller = false;  //สงสัยด
  //ตัวแปรรับค่าจากapi
  dataStudent:any=[];

  constructor(public api:StudentService) { }

  ngOnInit(): void {
    this.fetchStudent();
  }


  //ฟังก์ชั้นในการโหลดข้อมูล
  fetchStudent(){
    this.api.getStudent4().subscribe((data:{}) => {
      this.dataStudent = data
     // console.log(data)
    })

  }





}
