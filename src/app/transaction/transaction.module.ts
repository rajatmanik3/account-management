import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TransactionRoutingModule } from './transaction-routing.module';
import { SharedModule } from '../shared/shared.module';
import { TransactionService } from './transaction.service';

import { ListComponent } from './list/list.component';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { MatDialogModule, MatProgressSpinnerModule, MatPaginatorModule, MatSortModule, MatTableModule, MatTooltipModule, MatToolbarModule, MatInputModule, MatFormFieldModule } from '@angular/material';
import { CdkTableModule } from '@angular/cdk/table';
import { CreateComponent } from './create/create.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TransactionRoutingModule,
    SharedModule,
    NgbModule,
    MatDialogModule,
    MatProgressSpinnerModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule,
    CdkTableModule,
    MatToolbarModule,
    MatTooltipModule,
    MatFormFieldModule,
    MatInputModule
  ],
  declarations: [
    ListComponent,
    CreateComponent
  ],
  exports: [MatPaginatorModule, MatSortModule, CdkTableModule, MatFormFieldModule,
    MatInputModule],
  providers:[TransactionService]
})
export class TransactionModule { }
