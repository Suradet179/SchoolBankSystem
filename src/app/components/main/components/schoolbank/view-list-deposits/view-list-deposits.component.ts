import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

import * as jspdf from 'jspdf';
import html2canvas from 'html2canvas';
import { StudentService } from 'src/app/components/api/student/student.service';
@Component({
  selector: 'app-view-list-deposits',
  templateUrl: './view-list-deposits.component.html',
  styleUrls: ['./view-list-deposits.component.css'],
})
export class ViewListDepositsComponent implements OnInit {
  statusSelect: string;

  show1: boolean = false;
  show2: boolean = false;
  show3: boolean = false;

  slowFiller = false; //สงสัยด
  //ตัวแปรรับค่าจากapi
  Data_d: any = []; //สำหรับแสดงรายการทั้งหมด

  DataGetListMonth: any = []; //สำหรับ แสดงรายการเป็นรายเดือน

  DateGetBetweenDate: any = []; //สำหรับ แสดงรายการ ระหว่างวันที่

  // //สร้างตัวแปรแสดงรายละเอียด รายการถอน
  d_Detail = {
    d_RafID: '',
    d_amount_deposit: '',
    d_date: '',
    d_deposit: '',
    d_fname: '',
    d_generation: '',
    d_lname: '',
    d_prefix: '',
    d_primary: '',
    d_sid: '',
  };

  //สำหรับแสดงรายการทั้งหมด
  Depositget = {
    sid: '',
    generation: '',
  };

  //สำหรับแสดงรายการ เป็นรายเดือน
  Monthly = {
    sid: '',
    generation: '',
    month: '',
  };

  //สำหรับแสดงรายการ ระหว่างวัน
  BetweenDate = {
    sid: '',
    generation: '',
    date1: '',
    date2: '',
  };

  constructor(public api: StudentService) {}

  ngOnInit(): void {
    //this.fetchWithdrawById();
  }

  noClickShow1() {
    this.show1 = !this.show1;
  }
  noClickShow2() {
    this.show2 = !this.show2;
  }
  noClickShow3() {
    this.show3 = !this.show3;
  }

  //ฟังก์ชั้น แสดงรายการทั้งหมด
  fetchDepositById(id, generation) {
    console.log(id);
    console.log(generation);
    this.api.getDepositById(id, generation).subscribe((data: {}) => {
      this.Data_d = data;
      console.log(data);
    });
  }

  //imagesArray : dataname[] = [];
  arrayText: any = [];

  RafID: String;
  amount_deposit: String;
  date: String;
  deposit: String;
  fname: String;
  generation: String;
  lname: String;
  prefix: String;
  primary: String;
  sid: String;
  //ฟังก์ชันแสดงรายละเอียด
  detaildepositById(generation, sid, d_amount_deposit) {
    this.arrayText = [{}];
    console.log(this.d_Detail);
    this.api
      .getDetailDepositById(generation, sid, d_amount_deposit)
      .subscribe((data) => {
        console.log(data);
        this.arrayText.push(data);
        console.log(this.arrayText);

        this.RafID = this.arrayText[1].d_RafID;
        this.amount_deposit = this.arrayText[1].d_amount_deposit;
        this.date = this.arrayText[1].d_date;
        this.generation = this.arrayText[1].d_generation;
        this.sid = this.arrayText[1].d_sid;
        this.prefix = this.arrayText[1].d_prefix;
        this.fname = this.arrayText[1].d_fname;
        this.lname = this.arrayText[1].d_lname;
        this.primary = this.arrayText[1].d_primary;
        this.deposit = this.arrayText[1].d_deposit;

        // console.log(this.arrayText[1].sid);
      });

    //alert(generation+sid+RafID);
  }

  refresh() {
    window.location.reload();
  }

  //แสดงรายการ เป็นรายเดือน
  MonthlyDeposit(generation, sid, month) {
    this.api
      .getlistMonthlyDeposit(generation, sid, month)
      .subscribe((data: {}) => {
        this.DataGetListMonth = data;
        console.log(data);
      });
  }

  //แสดงรายการ ระหว่างวันที่
  findBetweenDate(generation, sid, date1, date2) {
    this.api
      .getlistDepositBetweenDate(generation, sid, date1, date2)
      .subscribe((data: {}) => {
        this.DateGetBetweenDate = data;
        console.log(data);
      });
  }

  //print slip
  @ViewChild('content') content: ElementRef;

  printPDF(sid, RafID) {
    var data = document.getElementById('content');
    html2canvas(data).then((canvas) => {
      // Few necessary setting options
      var imgWidth = 208;
      var pageHeight = 295;
      var imgHeight = (canvas.height * imgWidth) / canvas.width;
      var heightLeft = imgHeight;

      const contentDataURL = canvas.toDataURL('image/png');
      let pdf = new jspdf('p', 'mm', 'a4'); // A4 size page of PDF
      var position = 0;
      pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight);
      pdf.save(this.sid + '_' + this.RafID + '.pdf'); // Generated PDF
    });
  }
}
