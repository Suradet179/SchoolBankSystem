import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import * as jspdf from 'jspdf';
import html2canvas from 'html2canvas';
import { StudentService } from 'src/app/components/api/student/student.service';

@Component({
  selector: 'app-view-list-withdraws',
  templateUrl: './view-list-withdraws.component.html',
  styleUrls: ['./view-list-withdraws.component.css'],
})
export class ViewListWithdrawsComponent implements OnInit {
  statusSelect: string;

  show1: boolean = false;
  show2: boolean = false;
  show3: boolean = false;

  slowFiller = false; //สงสัยด
  //ตัวแปรรับค่าจากapi
  Data_w: any = []; //สำหรับแสดงรายการทั้งหมด

  DataGetListMonth: any = []; //สำหรับ แสดงรายการเป็นรายเดือน  DataGetListMonth

  DateGetBetweenDate: any = []; //สำหรับ แสดงรายการ ระหว่างวันที่

  // //สร้างตัวแปรแสดงรายละเอียด รายการถอน
  w_Detail = {
    W_RafID: '',
    W_amount_withdraw: '',
    W_date: '',
    W_withdraw: '',
    W_fname: '',
    W_generation: '',
    W_lname: '',
    W_prefix: '',
    W_primary: '',
    W_sid: '',
  };

  //สำหรับแสดงรายการทั้งหมด
  Withdrawget = {
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
  fetchWithdrawById(id, generation) {
    console.log(id);
    console.log(generation);
    this.api.getWithdrawById(id, generation).subscribe((data: {}) => {
      this.Data_w = data;
      console.log(data);
    });
  }

  //imagesArray : dataname[] = [];
  arrayText: any = [];

  RafID: String;
  amount_withdraw: String;
  date: String;
  withdraw: String;
  fname: String;
  generation: String;
  lname: String;
  prefix: String;
  primary: String;
  sid: String;
  //ฟังก์ชันแสดงรายละเอียด
  detailwithdrawById(generation, sid, W_amount_withdraw) {
    this.arrayText = [{}];
    console.log(this.w_Detail);
    this.api
      .getDetailwithdrawById(generation, sid, W_amount_withdraw)
      .subscribe((data) => {
        console.log(data);
        this.arrayText.push(data);
        console.log(this.arrayText);

        this.RafID = this.arrayText[1].W_RafID;
        this.amount_withdraw = this.arrayText[1].W_amount_withdraw;
        this.date = this.arrayText[1].W_date;
        this.generation = this.arrayText[1].W_generation;
        this.sid = this.arrayText[1].W_sid;
        this.prefix = this.arrayText[1].W_prefix;
        this.fname = this.arrayText[1].W_fname;
        this.lname = this.arrayText[1].W_lname;
        this.primary = this.arrayText[1].W_primary;
        this.withdraw = this.arrayText[1].W_withdraw;
        // console.log(this.arrayText[1].sid);
      });

    //alert(generation+sid+RafID);
  }

  refresh() {
    window.location.reload();
  }

  //แสดงรายการ เป็นรายเดือน
  MonthlyWithdraw(generation, sid, month) {
    this.api.getlistMonthlyWithdraw(generation, sid, month)   //DataGetListMonth
      .subscribe((data: {}) => {
        this.DataGetListMonth = data;
        console.log(data);
      });
    //alert(generation+sid+month);
  }

  //แสดงรายการ ระหว่างวันที่
  findBetweenDate(generation, sid, date1, date2) {
    this.api
      .getlistWithdrawBetweenDate(generation, sid, date1, date2)
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
