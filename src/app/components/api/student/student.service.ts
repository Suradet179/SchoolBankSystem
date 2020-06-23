import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StudentModel } from './studentModel';
import { GetStudentModel } from './getstudent';
import { depositModel } from './deposit';
import { withdrawtModel } from './withdraw';
import { summoney } from './summoney';
import { TeacherModel } from './TeacherModel';
import { idTeacher } from './idTeacher';
import { idSummoney } from './idSummoney';
import { listWithdrawModel } from './listWithdraw';
import { listDepositModel } from './listDeposit';
import { listMonthlyModel } from './listMonthly';
import { listBetweenDateModel } from './listBetweenDate';
import { UserInfo } from './models/userinfo';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  //api url
  apiURL = 'http://localhost:3000/';

  userInfo: UserInfo;
  constructor(private http: HttpClient) {}

  //headers
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Accept: 'application/json',
    }),
  };

  setUserInfo(key: string, value: string) {
    localStorage.setItem(key, value);
  }

  login(username: string, password: string): Observable<any> {
    return this.http
      .get<any>(`${this.apiURL}login/${username}/${password}`)
      .pipe(
        tap((userInfo) => {
          this.userInfo = userInfo;
          this.setUserInfo('uuid', userInfo.uuid);
          this.setUserInfo('authority', userInfo.authority);
        })
      );
  }

  logout(): Observable<any> {
    return this.http.get<any>(`${this.apiURL}logout`);
  }

  //////////ข้อมูลนักเรียน

  //อ่านข้อมูล
  getStudent1(): Observable<StudentModel> {
    return this.http.get<StudentModel>(this.apiURL + 'get_student1');
  }

  //อ่านข้อมูล
  getStudent2(): Observable<StudentModel> {
    return this.http.get<StudentModel>(this.apiURL + 'get_student2');
  }

  //อ่านข้อมูล
  getStudent3(): Observable<StudentModel> {
    return this.http.get<StudentModel>(this.apiURL + 'get_student3');
  }

  //อ่านข้อมูล
  getStudent4(): Observable<StudentModel> {
    return this.http.get<StudentModel>(this.apiURL + 'get_student4');
  }

  //อ่านข้อมูล
  getStudent5(): Observable<StudentModel> {
    return this.http.get<StudentModel>(this.apiURL + 'get_student5');
  }

  //อ่านข้อมูล
  getStudent6(): Observable<StudentModel> {
    return this.http.get<StudentModel>(this.apiURL + 'get_student6');
  }

  //อ่านข้อมูล by id   //ไม่แน่ใจว่า sid หรือ id
  getStudentById(id): Observable<StudentModel> {
    return this.http.get<StudentModel>(this.apiURL + 'get_sudentById/' + id);
  }

  //เพิ่มข้อมูล
  createStudent(studentAdd): Observable<StudentModel> {
    return this.http.post<StudentModel>(
      this.apiURL + 'add_sudent',
      JSON.stringify(studentAdd),
      this.httpOptions
    );
  }

  // แก้ไข
  editStudent(sid, studentEdit): Observable<StudentModel> {
    return this.http.put<StudentModel>(
      this.apiURL + 'update_student/' + sid,
      JSON.stringify(studentEdit),
      this.httpOptions
    );
  }

  //ลบ
  deleteStudent(id) {

    return this.http.delete<GetStudentModel>(
      this.apiURL + 'delete_Student/' + id,
      this.httpOptions
    );
  }

  //////////////////////////การเงิน/////////////////

  //ฝาก
  Deposit(depositData): Observable<depositModel> {
    return this.http.post<depositModel>(
      this.apiURL + 'Deposits',
      JSON.stringify(depositData),
      this.httpOptions
    );
  }
  // ถอน
  Withdraw(withdrawData): Observable<withdrawtModel> {
    return this.http.post<withdrawtModel>(
      this.apiURL + 'Withdraws',
      JSON.stringify(withdrawData),
      this.httpOptions
    );
  }

  //////////////ครู///////////////////////

  //เพิ่มข้อมูล teacher
  createTeacher(teacherAdd): Observable<TeacherModel> {
    return this.http.post<TeacherModel>(
      this.apiURL + 'add_Teacher',
      JSON.stringify(teacherAdd),
      this.httpOptions
    );
  }

  //get all
  getTeacher(): Observable<TeacherModel> {
    return this.http.get<TeacherModel>(this.apiURL + 'getTeacher');
  }

  //get by id
  getTeacherById(id): Observable<TeacherModel> {
    return this.http.get<TeacherModel>(this.apiURL + 'get_TeacherById/' + id);
  }

  // แก้ไข
  editTeacher(id, teacherEdit): Observable<TeacherModel> {
    return this.http.put<TeacherModel>(
      this.apiURL + 'update_Teacher/' + id,
      JSON.stringify(teacherEdit),
      this.httpOptions
    );
  }

  //ลบ
  deleteTeacher(id) {
    //  return this.http.delete<StudentModel>(this.apiURL + "delete_Student", this.httpOptions)
    return this.http.delete<idTeacher>(
      this.apiURL + 'delete_Teacher/' + id,
      this.httpOptions
    );
  }

  //////////////ที่เก็บเงินรวม///////////////////////

  //เงินรวม   summoney   //อันนี้ไม่รู้ว่า componentไหนดึงไปใช้
  getSumMoney1(): Observable<summoney> {
    return this.http.get<summoney>(this.apiURL + 'getSumMoney1');
  }

  //get ป.1
  getSummoney1(): Observable<summoney> {
    return this.http.get<summoney>(this.apiURL + 'getSumMoney1');
  }

  //get ป.2
  getSummoney2(): Observable<summoney> {
    return this.http.get<summoney>(this.apiURL + 'getSumMoney2');
  }

  //get ป.3
  getSummoney3(): Observable<summoney> {
    return this.http.get<summoney>(this.apiURL + 'getSumMoney3');
  }
  //get ป.4
  getSummoney4(): Observable<summoney> {
    return this.http.get<summoney>(this.apiURL + 'getSumMoney4');
  }
  //get ป.5
  getSummoney5(): Observable<summoney> {
    return this.http.get<summoney>(this.apiURL + 'getSumMoney5');
  }
  //get ป.6
  getSummoney6(): Observable<summoney> {
    return this.http.get<summoney>(this.apiURL + 'getSumMoney6');
  }

  //post sum money
  createSummoney(summoneyAdd): Observable<summoney> {
    return this.http.post<summoney>(
      this.apiURL + 'add_summoney',
      JSON.stringify(summoneyAdd),
      this.httpOptions
    );
  }

  //put sum money
  editSummoney(id, summoneyEdit): Observable<summoney> {
    return this.http.put<summoney>(
      this.apiURL + 'update_summoney/' + id,
      JSON.stringify(summoneyEdit),
      this.httpOptions
    );
  }

  //delete  sum money
  deleteSummoney(id) {
    return this.http.delete<idSummoney>(
      this.apiURL + 'delete_summoney/' + id,
      this.httpOptions
    );
  }

  //get all
  getSummoneyAll(): Observable<summoney> {
    return this.http.get<summoney>(this.apiURL + 'getSummoneyAll');
  }

  //get by id
  getSummoneyById(id): Observable<summoney> {
    return this.http.get<summoney>(this.apiURL + 'getSummoneyById/' + id);
  }

  /////////////////////////////แสดงรายการฝาก-ถอน/////////////////////////////////
  //แสดงรายการฝาก
  getDepositById(id, generation): Observable<listDepositModel> {
    return this.http.get<listDepositModel>(
      this.apiURL + 'getDepositById/' + generation + '/' + id
    );
  }

  getlistMonthlyDeposit(generation, sid, month): Observable<listMonthlyModel> {
    return this.http.get<listMonthlyModel>(
      this.apiURL + 'listDepositMonthly/' + generation + '/' + sid + '/' + month
    );
  }

  getlistDepositBetweenDate(
    generation,
    sid,
    date1,
    date2
  ): Observable<listBetweenDateModel> {
    return this.http.get<listBetweenDateModel>(
      this.apiURL +
        'listDepositBetweenDate/' +
        generation +
        '/' +
        sid +
        '/' +
        date1 +
        '/' +
        date2
    );
  }

  getDetailDepositById(generation, sid, count): Observable<listDepositModel> {
    return this.http.get<listDepositModel>(
      this.apiURL +
        'getDetailDepositById/' +
        generation +
        '/' +
        sid +
        '/' +
        count
    );
  }
  //แสดงรายการถอน
  getWithdrawById(id, generation): Observable<listWithdrawModel> {
    return this.http.get<listWithdrawModel>(
      this.apiURL + 'getWithdrawById/' + generation + '/' + id
    );
  }

  getlistMonthlyWithdraw(generation, sid, month): Observable<listMonthlyModel> {
    return this.http.get<listMonthlyModel>(
      this.apiURL + 'listWithdrawMonthly/' + generation + '/' + sid + '/' + month
    );
  }



  getlistWithdrawBetweenDate(
    generation,
    sid,
    date1,
    date2
  ): Observable<listBetweenDateModel> {
    return this.http.get<listBetweenDateModel>(
      this.apiURL +
        'listWithdrawBetweenDate/' +
        generation +
        '/' +
        sid +
        '/' +
        date1 +
        '/' +
        date2
    );
  }

  getDetailwithdrawById(generation, sid, count): Observable<listWithdrawModel> {
    return this.http.get<listWithdrawModel>(
      this.apiURL +
        'getDetailwithdrawById/' +
        generation +
        '/' +
        sid +
        '/' +
        count
    );
  }
}
