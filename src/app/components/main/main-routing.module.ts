import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewListDepositsComponent } from './components/schoolbank/view-list-deposits/view-list-deposits.component';
import { ViewListWithdrawsComponent } from './components/schoolbank/view-list-withdraws/view-list-withdraws.component';
import { DashboardComponent } from './components/schoolbank/dashboard/dashboard.component';
import { ListStudent1Component } from './components/schoolbank/primary1/list-student1/list-student1.component';
import { ListStudent2Component } from './components/schoolbank/primary2/list-student2/list-student2.component';
import { ListStudent3Component } from './components/schoolbank/primary3/list-student3/list-student3.component';
import { ListStudent4Component } from './components/schoolbank/primary4/list-student4/list-student4.component';
import { ListStudent5Component } from './components/schoolbank/primary5/list-student5/list-student5.component';
import { ListStudent6Component } from './components/schoolbank/primary6/list-student6/list-student6.component';
import { ListDepositWithdraw1Component } from './components/schoolbank/primary1/list-deposit-withdraw1/list-deposit-withdraw1.component';
import { ListDepositWithdraw2Component } from './components/schoolbank/primary2/list-deposit-withdraw2/list-deposit-withdraw2.component';
import { ListDepositWithdraw3Component } from './components/schoolbank/primary3/list-deposit-withdraw3/list-deposit-withdraw3.component';
import { ListDepositWithdraw4Component } from './components/schoolbank/primary4/list-deposit-withdraw4/list-deposit-withdraw4.component';
import { ListDepositWithdraw5Component } from './components/schoolbank/primary5/list-deposit-withdraw5/list-deposit-withdraw5.component';
import { ListDepositWithdraw6Component } from './components/schoolbank/primary6/list-deposit-withdraw6/list-deposit-withdraw6.component';
import { ViewLitsStudent1Component } from './components/schoolbank/primary1/view-lits-student1/view-lits-student1.component';
import { ViewLitsStudent2Component } from './components/schoolbank/primary2/view-lits-student2/view-lits-student2.component';
import { ViewLitsStudent3Component } from './components/schoolbank/primary3/view-lits-student3/view-lits-student3.component';
import { ViewLitsStudent4Component } from './components/schoolbank/primary4/view-lits-student4/view-lits-student4.component';
import { ViewLitsStudent5Component } from './components/schoolbank/primary5/view-lits-student5/view-lits-student5.component';
import { ViewLitsStudent6Component } from './components/schoolbank/primary6/view-lits-student6/view-lits-student6.component';
import { ListMoneySumComponent } from './components/admin/list-money-sum/list-money-sum.component';
import { ListTeachersComponent } from './components/admin/list-teachers/list-teachers.component';
import { MainComponent } from './main.component';
const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },

      { path: 'view-list-deposits', component: ViewListDepositsComponent },
      { path: 'view-list-withdraws', component: ViewListWithdrawsComponent },

      { path: 'list-student1', component: ListStudent1Component },
      { path: 'list-student2', component: ListStudent2Component },
      { path: 'list-student3', component: ListStudent3Component },
      { path: 'list-student4', component: ListStudent4Component },
      { path: 'list-student5', component: ListStudent5Component },
      { path: 'list-student6', component: ListStudent6Component },
      //ฝากเงิน-ถอนเงิน
      {
        path: 'list-deposit-withdraw1',
        component: ListDepositWithdraw1Component,
      },
      {
        path: 'list-deposit-withdraw2',
        component: ListDepositWithdraw2Component,
      },
      {
        path: 'list-deposit-withdraw3',
        component: ListDepositWithdraw3Component,
      },
      {
        path: 'list-deposit-withdraw4',
        component: ListDepositWithdraw4Component,
      },
      {
        path: 'list-deposit-withdraw5',
        component: ListDepositWithdraw5Component,
      },
      {
        path: 'list-deposit-withdraw6',
        component: ListDepositWithdraw6Component,
      },
      //ดูยอดเงิน
      { path: 'view-lits-student1', component: ViewLitsStudent1Component },
      { path: 'view-lits-student2', component: ViewLitsStudent2Component },
      { path: 'view-lits-student3', component: ViewLitsStudent3Component },
      { path: 'view-lits-student4', component: ViewLitsStudent4Component },
      { path: 'view-lits-student5', component: ViewLitsStudent5Component },
      { path: 'view-lits-student6', component: ViewLitsStudent6Component },

      { path: 'list-money-sum', component: ListMoneySumComponent },
      { path: 'list-teachers', component: ListTeachersComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainRoutingModule {}
