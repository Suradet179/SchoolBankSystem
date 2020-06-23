import { Component, OnInit } from '@angular/core';
import {StudentService} from '../../../../../api/student/student.service';
@Component({
  selector: 'app-list-student2',
  templateUrl: './list-student2.component.html',
  styleUrls: ['./list-student2.component.css']
})
export class ListStudent2Component implements OnInit {

  slowFiller = false;  //สงสัยด
  //ตัวแปรรับค่าจากapi
  dataStudent:any=[];

// //สร้างตัวแปรกำหนดค่าบนฟอร์ม เพิ่มข้อมูลนักเรียน
    studentAdd = {
    "collections":"",
    "docsss":"",
    "prefix":"",
    "fname":"",
    "lname":"",
    "primary":"",
    "tid":"",
    "money":"",
    "withdraw":"",
    "deposit":"",
  }


  // //สร้างตัวแปรแสดงรายละเอียดข้อมูลนักเรียน
  studentDetail = {
    "generation":"",
    "sid":"",
    "prefix":"",
    "fname":"",
    "lname":"",
    "primary":"",
    "tid":"",
    "money":"",
    "withdraw":"",
    "deposit":"",
  }

    // //สร้างตัวแปรแก้ไขข้อมูลนักเรียน
    studentEdit = {
      "generation":"",
      "sid":"",
      "prefix":"",
      "fname":"",
      "lname":"",
      "primary":"",
      "tid":"",
      "money":"",
    }

  constructor(public api:StudentService) { }

  ngOnInit(): void {
    this.fetchStudent();
  }


  //ฟังก์ชั้นในการโหลดข้อมูล
  fetchStudent(){
    this.api.getStudent2().subscribe((data:{}) => {
      this.dataStudent = data
     // console.log(data)
    })

  }


//ฟังก์ชันบันทึกข้อมูลนักเรียน
submitAddStudent(){
  this.api.createStudent(this.studentAdd).subscribe((data: {}) => {
  });
    alert("บันทึกข้อมูลนักเรียนเรียบร้อย");
    this.fetchStudent(); //โหลดข้อมูล
    this.studentAdd = {
      "collections":"",
      "docsss":"",
      "prefix":"",
      "fname":"",
      "lname":"",
      "primary":"",
      "tid":"",
      "money":"",
      "withdraw":"",
      "deposit":"",
    }
}


//ฟังก์ชั้นแก้ไขข้อมูลนักเรียน
submitEditStudent(){
  this.api.editStudent((this.studentEdit.sid ),this.studentEdit).subscribe((data: {}) => {
  });
    alert("บันทึกการแก้ไขข้อมูลนักเรียนเรียบร้อย");
    this.fetchStudent(); //โหลดข้อมูล



}


//imagesArray : dataname[] = [];
arrayText : any = [];

generation : String;
sid : String;
prefix : String;
fname : String;
lname : String;
primary : String;
tid : String;
money : String;
deposit : String;
withdraw : String;
deposit_amount : String;
withdraw_amount : String;
//ฟังก์ชันแสดงรายละเอียด
detailStudent(id){
  this.arrayText = [{
  }];
  console.log(this.studentDetail);
  this.api.getStudentById(id).subscribe(data =>{
    console.log(data);
    this.arrayText.push(data);
    console.log(this.arrayText);

    this.generation = this.arrayText[1].generation
    this.sid = this.arrayText[1].sid
    this.prefix = this.arrayText[1].prefix
    this.fname = this.arrayText[1].fname
    this.lname = this.arrayText[1].lname
    this.primary = this.arrayText[1].primary
    this.tid = this.arrayText[1].tid
    this.money = this.arrayText[1].money
    this.deposit = this.arrayText[1].deposit
    this.withdraw = this.arrayText[1].withdraw
    this.deposit_amount = this.arrayText[1].deposit_amount
    this.withdraw_amount = this.arrayText[1].withdraw_amount

   console.log(this.arrayText[1].sid);

  });

 // alert(id);
}


//ฟังก์ชั้นแสดงข้อมูลแก้ไขข้อมูลนักเรียน
editStudent(id){
  //alert(id);
  this.arrayText = [{
  }];
  this.api.getStudentById(id).subscribe(data =>{
    console.log(data);
    this.arrayText.push(data);
    console.log(this.arrayText);

    this.studentEdit.generation = this.arrayText[1].generation
    this.studentEdit.sid = this.arrayText[1].sid
    this.studentEdit.prefix = this.arrayText[1].prefix
    this.studentEdit.fname = this.arrayText[1].fname
    this.studentEdit.lname = this.arrayText[1].lname
    this.studentEdit.primary = this.arrayText[1].primary
    this.studentEdit.tid = this.arrayText[1].tid
    this.studentEdit.money = this.arrayText[1].money
  });



}








//ฟังก์ชั้นลบข้อมูลนักเรียน
deleteStudent(id){
  if(window.confirm('ลบข้อมูลนักเรียน รหัส'+id)){
  this.api.deleteStudent(id).subscribe((data: {}) => {
  this.fetchStudent(); //โหลดข้อมูล
});
}

//alert(id);
}








}
interface dataname{
  lname: any;
  primary: any;
  generation: any;
  sid: any;
  tid: any;
  prefix: any;
  fname: any;
}

