import { Component, OnInit } from '@angular/core';
import {StudentService} from '../../../../../api/student/student.service';
@Component({
  selector: 'app-view-lits-student3',
  templateUrl: './view-lits-student3.component.html',
  styleUrls: ['./view-lits-student3.component.css']
})
export class ViewLitsStudent3Component implements OnInit {


  slowFiller = false;  //สงสัยด
  //ตัวแปรรับค่าจากapi
  dataStudent:any=[];

  constructor(public api:StudentService) { }

  ngOnInit(): void {
    this.fetchStudent();
  }


  //ฟังก์ชั้นในการโหลดข้อมูล
  fetchStudent(){
    this.api.getStudent3().subscribe((data:{}) => {
      this.dataStudent = data
     // console.log(data)
    })

  }





}
