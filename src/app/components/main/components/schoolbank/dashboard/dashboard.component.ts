 import { Component, OnInit } from '@angular/core';
 import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
 import { Label } from 'ng2-charts';
 import { StudentService } from '../../../../api/student/student.service';
//  import { StudentService } from 'src/app/components/api/student/student.service';

 @Component({
   selector: 'app-dashboard',
   templateUrl: './dashboard.component.html',
   styleUrls: ['./dashboard.component.css'],
 })
 export class DashboardComponent implements OnInit {
   slowFiller = false; //สงสัยด
   //ตัวแปรรับค่าจากapi
   summoney1: any = [];

   datasss: any = [];

   // //สร้างตัวแปรกำหนดค่าบนฟอร์ม
   SumMoney = {
     generation: '',
     primary: '',
     total_money: '',
   };

   constructor(public api: StudentService) {}

   ngOnInit(): void {
     //  this.fetchStudent();
     this.detailStudent1();
     this.detailStudent2();
     this.detailStudent3();
     this.detailStudent4();
     this.detailStudent5();
     this.detailStudent6();

     this.ChartSummoneyStudent();
     this.barChartData;
   }

   arrayText: any = {};
   generation: String;
   primary: String;
   total_money: String;

   p1: number;
   //ฟังก์ชันแสดงรายละเอียด //ป1
   detailStudent1() {
     this.arrayText = [{}];
     this.api.getSumMoney1().subscribe(data =>{
       this.arrayText = data;
       this.p1 = this.arrayText[0].SumMoney.total_money;
     });
   }

  p2: number;
  //ฟังก์ชันแสดงรายละเอียด //ป2
  detailStudent2() {
    this.arrayText = [{}];
    this.api.getSummoney2().subscribe(data =>{
      this.arrayText = data;
      this.p2 = this.arrayText[0].SumMoney.total_money;
    });
  }

  p3: number;
  //ฟังก์ชันแสดงรายละเอียด //ป3
  detailStudent3() {
    this.arrayText = [{}];
    this.api.getSummoney3().subscribe(data =>{
      this.arrayText = data;
      this.p3 = this.arrayText[0].SumMoney.total_money;
    });
  }

  p4: number;
  //ฟังก์ชันแสดงรายละเอียด //ป4
  detailStudent4() {
    this.arrayText = [{}];
    this.api.getSummoney4().subscribe(data =>{
      this.arrayText = data;
      this.p4 = this.arrayText[0].SumMoney.total_money;
    });
  }

  p5: number;
  //ฟังก์ชันแสดงรายละเอียด //ป5
  detailStudent5() {
    this.arrayText = [{}];
    this.api.getSummoney5().subscribe(data =>{
      this.arrayText = data;
      this.p5 = this.arrayText[0].SumMoney.total_money;
    });
  }

  p6: number;
  //ฟังก์ชันแสดงรายละเอียด //ป6
  detailStudent6() {
    this.arrayText = [{}];
    this.api.getSummoney6().subscribe(data =>{
      this.arrayText = data;
      this.p6 = this.arrayText[0].SumMoney.total_money;
    });
  }

  d1: number;
  d2: number;
  d3: number;
  d4: number;
  d5: number;
  d6: number;
  w1: number;
  w2: number;
  w3: number;
  w4: number;
  w5: number;
  w6: number;

  //***************************กราฟ */
  ChartSummoneyStudent() {
    this.arrayText = [{}];
    this.api.getSummoneyAll().subscribe(data =>{
      this.arrayText = data;
      //ยอดคงเหลือ
      console.log('m ป6' + this.p6);
      this.p6 = this.arrayText[0].SumMoney.total_money;
      this.p5 = this.arrayText[1].SumMoney.total_money;
      this.p4 = this.arrayText[2].SumMoney.total_money;
      this.p3 = this.arrayText[3].SumMoney.total_money;
      this.p2 = this.arrayText[4].SumMoney.total_money;
      this.p1 = this.arrayText[5].SumMoney.total_money;
      //ยอดฝาก
      this.d6 = this.arrayText[0].SumMoney.SumMoneyDeposit;
      this.d5 = this.arrayText[1].SumMoney.SumMoneyDeposit;
      this.d4 = this.arrayText[2].SumMoney.SumMoneyDeposit;
      this.d3 = this.arrayText[3].SumMoney.SumMoneyDeposit;
      this.d2 = this.arrayText[4].SumMoney.SumMoneyDeposit;
      this.d1 = this.arrayText[5].SumMoney.SumMoneyDeposit;
      //ยอดถอน
      this.w6 = this.arrayText[0].SumMoney.SumMoneyWithdraw;
      this.w5 = this.arrayText[1].SumMoney.SumMoneyWithdraw;
      this.w4 = this.arrayText[2].SumMoney.SumMoneyWithdraw;
      this.w3 = this.arrayText[3].SumMoney.SumMoneyWithdraw;
      this.w2 = this.arrayText[4].SumMoney.SumMoneyWithdraw;
      this.w1 = this.arrayText[5].SumMoney.SumMoneyWithdraw;
      console.log('w ป6' + this.w6);
      //กราฟ
      this.barChartData = [
        {
          data: [this.p1, this.p2, this.p3, this.p4, this.p5, this.p6],
          label: 'ยอดเงินคงเหลือ',
        }, //แท่งที่1
        {
          data: [this.d1, this.d2, this.d3, this.d4, this.d5, this.d6],
          label: 'ยอดเงินฝาก',
        }, //แท่งที่1
        {
          data: [this.w1, this.w2, this.w3, this.w4, this.w5, this.w6],
          label: 'ยอดเงินถอน',
        }, //แท่งที่1
      ];
    });
  }

  //กราฟ
  barChartOptions: ChartOptions = {
    responsive: true,
  };
  barChartLabels: Label[] = [
    'ประถมศึกษาปีที่ 1',
    'ประถมศึกษาปีที่ 2',
    'ประถมศึกษาปีที่ 3',
    'ประถมศึกษาปีที่ 4',
    'ประถมศึกษาปีที่ 5',
    'ประถมศึกษาปีที่ 6',
  ]; //หัวข้อแนว x ป1 ป2 ป3 ป4
  barChartType: ChartType = 'bar';
  barChartLegend = true;
  barChartPlugins = [];

  barChartData: ChartDataSets[] = [];






}


















