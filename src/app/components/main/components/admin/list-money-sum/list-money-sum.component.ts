import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/components/api/student/student.service';
@Component({
  selector: 'app-list-money-sum',
  templateUrl: './list-money-sum.component.html',
  styleUrls: ['./list-money-sum.component.css'],
})
export class ListMoneySumComponent implements OnInit {
  slowFiller = false; //สงสัยด
  //ตัวแปรรับค่าจากapi
  dataSummoney: any = [];

  // //สร้างตัวแปรเพิ่มข้อมูล เงินรวม
  summoneyAdd = {
    generation: '',
    primary: '',
    total_money: '',
  };

  // //สร้างตัวแปรแก้ไขข้อมูล เงินรวม
  summoneyEdit = {
    generation: '',
    primary: '',
    total_money: '',
  };

  constructor(public api: StudentService) {}

  ngOnInit(): void {
    this.fetchSummoney();
  }

  arrayText2: any = [];
  generation2: String;
  primary2: String;
  total_money2: Number;

  //โหลดข้อมูลsumoney
  fetchSummoney() {
    this.api.getSummoneyAll().subscribe((data: {}) => {
      this.dataSummoney = data;
      this.arrayText2.push(data);
      this.summoneyEdit.total_money = this.arrayText[1].total_money2;

      console.log(this.total_money2);
    });
  }

  //ฟังก์ชันบันทึกข้อมูลครู
  submitAddSummoney() {
    this.api.createSummoney(this.summoneyAdd).subscribe((data: {}) => {});
    this.fetchSummoney(); //โหลดข้อมูล
    alert('สร้างข้อมูลเงินรวมสำเร็จ');
    this.summoneyAdd = {
      generation: '',
      primary: '',
      total_money: '',
    };
  }

  //imagesArray : dataname[] = [];
  arrayText: any = [];
  generation: String;
  primary: String;
  total_money: String;

  //บันทึกข้อมูลแก้ไขเงินรวม
  submitEditSummoney() {
    this.api
      .editSummoney(this.summoneyEdit.generation, this.summoneyEdit)
      .subscribe((data: {}) => {});
    this.fetchSummoney(); //โหลดข้อมูล
    alert('บันทึกการแก้ไขเงินรวม');
    this.summoneyEdit = {
      generation: '',
      primary: '',
      total_money: '',
    };
  }

  //แสดงข้อมูลแก้ไขเงินรวม
  editSummoney(id) {
    //alert(id);
    this.arrayText = [{}];
    this.api.getSummoneyById(id).subscribe((data) => {
      //console.log(data);
      this.arrayText.push(data);
      // console.log(this.arrayText);

      this.summoneyEdit.generation = this.arrayText[1].generation;
      this.summoneyEdit.primary = this.arrayText[1].primary;
      this.summoneyEdit.total_money = this.arrayText[1].total_money;
    });
  }

  //ฟังก์ชั้นลบข้อมูลเงินรวม
  deleteSumoneyyyy(id) {
    if (window.confirm('ลบข้อมูลครู รหัส' + id)) {
      this.api.deleteSummoney(id).subscribe((data: {}) => {
        this.fetchSummoney(); //โหลดข้อมูล
      });

      //alert(id);
    }
  }
}
