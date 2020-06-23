import { NgModule } from '@angular/core';
import { MainComponent } from './main.component';
import { MenuComponent } from './components/menu/menu.component';

import { HeaderComponent } from './components/header/header.component';
import { ListMoneySumComponent } from './components/admin/list-money-sum/list-money-sum.component';
import { ListTeachersComponent } from './components/admin/list-teachers/list-teachers.component';
import { DashboardComponent } from './components/schoolbank/dashboard/dashboard.component';
import { ViewListDepositsComponent } from './components/schoolbank/view-list-deposits/view-list-deposits.component';
import { ViewListWithdrawsComponent } from './components/schoolbank/view-list-withdraws/view-list-withdraws.component';
import { ListDepositWithdraw1Component } from './components/schoolbank/primary1/list-deposit-withdraw1/list-deposit-withdraw1.component';
import { ListDepositWithdraw2Component } from './components/schoolbank/primary2/list-deposit-withdraw2/list-deposit-withdraw2.component';
import { ListDepositWithdraw3Component } from './components/schoolbank/primary3/list-deposit-withdraw3/list-deposit-withdraw3.component';
import { ListDepositWithdraw4Component } from './components/schoolbank/primary4/list-deposit-withdraw4/list-deposit-withdraw4.component';
import { ListDepositWithdraw5Component } from './components/schoolbank/primary5/list-deposit-withdraw5/list-deposit-withdraw5.component';
import { ListDepositWithdraw6Component } from './components/schoolbank/primary6/list-deposit-withdraw6/list-deposit-withdraw6.component';
import { ListStudent1Component } from './components/schoolbank/primary1/list-student1/list-student1.component';
import { ListStudent2Component } from './components/schoolbank/primary2/list-student2/list-student2.component';
import { ListStudent3Component } from './components/schoolbank/primary3/list-student3/list-student3.component';
import { ListStudent4Component } from './components/schoolbank/primary4/list-student4/list-student4.component';
import { ListStudent5Component } from './components/schoolbank/primary5/list-student5/list-student5.component';
import { ListStudent6Component } from './components/schoolbank/primary6/list-student6/list-student6.component';
import { ViewLitsStudent1Component } from './components/schoolbank/primary1/view-lits-student1/view-lits-student1.component';
import { ViewLitsStudent2Component } from './components/schoolbank/primary2/view-lits-student2/view-lits-student2.component';
import { ViewLitsStudent3Component } from './components/schoolbank/primary3/view-lits-student3/view-lits-student3.component';
import { ViewLitsStudent4Component } from './components/schoolbank/primary4/view-lits-student4/view-lits-student4.component';
import { ViewLitsStudent5Component } from './components/schoolbank/primary5/view-lits-student5/view-lits-student5.component';
import { ViewLitsStudent6Component } from './components/schoolbank/primary6/view-lits-student6/view-lits-student6.component';
import { MainRoutingModule } from './main-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
@NgModule({
  declarations: [
    MainComponent,
    MenuComponent,
  
    HeaderComponent,
    ListMoneySumComponent,
    ListTeachersComponent,
    DashboardComponent,
    ViewListDepositsComponent,
    ViewListWithdrawsComponent,
    ListDepositWithdraw1Component,
    ListDepositWithdraw2Component,
    ListDepositWithdraw3Component,
    ListDepositWithdraw4Component,
    ListDepositWithdraw5Component,
    ListDepositWithdraw6Component,
    ListStudent6Component,
    ListStudent5Component,
    ListStudent4Component,
    ListStudent3Component,
    ListStudent2Component,
    ListStudent1Component,

    ViewLitsStudent1Component,
    ViewLitsStudent2Component,
    ViewLitsStudent3Component,
    ViewLitsStudent4Component,
    ViewLitsStudent5Component,
    ViewLitsStudent6Component,
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    HttpClientModule,
    FormsModule,
    ChartsModule,
    NgbModule,
  ],
})
export class MainModule {}
