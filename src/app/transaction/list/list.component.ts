import { Component, OnInit } from "@angular/core";
import { TransactionService } from "../transaction.service";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { DatePipe } from '@angular/common';

@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.scss"]
})
export class ListComponent implements OnInit {
  apiHit = false;
  transactions = [];
  constructor(
    public transactionService: TransactionService,
    private router: Router,
    public toastrService: ToastrService
  ) {
    this.getList();
  }
  ngOnInit(): void {}

  getList() {
    this.apiHit = true;
    this.transactionService.list().subscribe(res => {
      this.apiHit = false;
      if (res['status']) {
        this.transactions = res['data'];
        for (var i = 0; i < this.transactions.length; i++) {
          if (this.transactions[i].createdAt) {

            this.transactions[i].createdAt = new DatePipe(
              "en-GB"
            ).transform(
              this.transactions[i].createdAt,
              "d MMMM y, h:mm a"
            );
            
          }
        }
      } else {
        this.toastrService.error(res['message']);
      }
    });
  }
}
