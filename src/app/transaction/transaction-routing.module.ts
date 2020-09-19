import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { ForgetPasswordComponent } from './forget-password/forget-password.component';

import { ListComponent } from './list/list.component';
import { CreateComponent } from './create/create.component';

// Routes
const routes: Routes = [
  {
    path: '',
    component: ListComponent
  },
  {
    path: 'create',
    component: CreateComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TransactionRoutingModule { }