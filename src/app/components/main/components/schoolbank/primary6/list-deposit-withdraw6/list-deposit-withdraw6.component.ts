import { Component, OnInit } from '@angular/core';
import {StudentService} from '../../../../../api/student/student.service';

@Component({
  selector: 'app-list-deposit-withdraw6',
  templateUrl: './list-deposit-withdraw6.component.html',
  styleUrls: ['./list-deposit-withdraw6.component.css']
})
export class ListDepositWithdraw6Component implements OnInit {

  slowFiller = false;  //สงสัยด
  //ตัวแปรรับค่าจากapi
  dataStudent:any=[];

  // //สร้างตัวแปรกำหนดค่าบนฟอร์ม ฝาก
  depositData = {
    "generation":"",
    "sid":"",
    "prefix":"",
    "fname":"",
    "lname":"",
    "primary":"",
    "tid":"",
    "money":"",
    "count":"",
  }

  // //สร้างตัวแปรกำหนดค่าบนฟอร์ม  ถอน
    withdrawData = {
    "generation":"",
    "sid":"",
    "prefix":"",
    "fname":"",
    "lname":"",
    "primary":"",
    "tid":"",
    "money":"",
    "count":"",
  }
  constructor(public api:StudentService) { }

  ngOnInit(): void {
    this.fetchStudent6();
  }


  //ฟังก์ชั้นในการโหลดข้อมูล   แสดงข้อมูลนักเรียน
  // fetchStudent6(){
  //   this.api.getStudent6().subscribe((data:{}) => {
  //     this.dataStudent = data
  //     console.log(data)
  //   })
  // }


  fetchStudent6() {
    this.api.getStudent6().subscribe(data=>{
      this.dataStudent = data;
      console.log(data);
    });
  }














  //ดึงข้อมูลมาแสดง by id
  /////////////////////////////////////
  arrayText : any = [];
  arrayText_d : any = [];
  arrayText_W : any = [];
  generation : String;
  sid : String;
  prefix : String;
  fname : String;
  lname : String;
  primary : String;
  tid : String;
  money : String;
  count : String;
  /////////////////////////////////////
  //ฝากเงิน
    studentdata(id){
        this.arrayText_d = [{
        }];
        this.api.getStudentById(id).subscribe(data =>{
          console.log(data);
          this.arrayText_d.push(data);
          console.log(this.arrayText_d);
            this.depositData.generation = this.arrayText_d[1].generation
            this.depositData.sid = this.arrayText_d[1].sid
            this.depositData.prefix = this.arrayText_d[1].prefix
            this.depositData.fname = this.arrayText_d[1].fname
            this.depositData.lname = this.arrayText_d[1].lname
            this.depositData.primary = this.arrayText_d[1].primary
            this.depositData.tid = this.arrayText_d[1].tid
            this.depositData.count = this.arrayText_d[1].deposit_amount+1

  // console.log(this.arrayText[1].deposit )
  // console.log(this.depositData.deposit)

        });
    }




//บันทึกข้อมูลการฝาก
submitDeposit(){
  
  this.api.Deposit(this.depositData).subscribe(data=>{
    console.log(data);
  });
  alert("บันทึกการฝากเรียบร้อย");
  this.fetchStudent6(); //โหลดข้อมูล

  this.depositData = {   //clear value
    "generation":"",
    "sid":"",
    "prefix":"",
    "fname":"",
    "lname":"",
    "primary":"",
    "tid":"",
    "money":"",
    "count":"",
  }


}





//ดึงข้อมูล by id ถอน
WithdrawMoney(id){
  this.arrayText_W = [{
  }];
  this.api.getStudentById(id).subscribe(data =>{
    console.log(data);
    this.arrayText_W.push(data);
    console.log(this.arrayText_W);
      this.withdrawData.generation = this.arrayText_W[1].generation
      this.withdrawData.sid = this.arrayText_W[1].sid
      this.withdrawData.prefix = this.arrayText_W[1].prefix
      this.withdrawData.fname = this.arrayText_W[1].fname
      this.withdrawData.lname = this.arrayText_W[1].lname
      this.withdrawData.primary = this.arrayText_W[1].primary
      this.withdrawData.tid = this.arrayText_W[1].tid
      this.withdrawData.count = this.arrayText_W[1].withdraw_amount+1
// console.log(this.arrayText[1].deposit )
// console.log(this.depositData.deposit)

  });

}


//บันทึกข้อมูลการถอน
submitWithdraw(){
  this.api.Withdraw(this.withdrawData).subscribe(data=>{
    console.log(data);
  });
  alert("บันทึกการถอนเรียบร้อย");
  this.fetchStudent6(); //โหลดข้อมูล

  this.withdrawData = {   //clear value
    "generation":"",
    "sid":"",
    "prefix":"",
    "fname":"",
    "lname":"",
    "primary":"",
    "tid":"",
    "money":"",
    "count":"",
  }




}


















}

