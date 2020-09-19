import { Component, OnInit } from "@angular/core";
import { TransactionService } from "../transaction.service";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { FormGroup, Validators, FormControl } from "@angular/forms";
import { CookieService } from "ngx-cookie-service";
declare var $: any;
@Component({
  selector: "app-create",
  templateUrl: "./create.component.html",
  styleUrls: ["./create.component.scss"]
})
export class CreateComponent implements OnInit {
  imageApiHit = false;
  transactionForm: FormGroup;
  apiHit = false;
  constructor(
    public transactionService: TransactionService,
    private router: Router,
    private toastr: ToastrService
  ) {
    this.buildForm();
  }

  ngOnInit(): void {
  }

  // Build Form //
  buildForm() {
    this.transactionForm = new FormGroup({
      transactionType: new FormControl("", [Validators.required]),
      amount: new FormControl("", [Validators.pattern("^[0-9]*$"), Validators.required]),
      description: new FormControl("", Validators.required)
    });
  }

  // Manage Transaction //
  manageTransaction() {
    if (this.transactionForm.controls.amount.value < 1) {
      this.toastr.error("Please enter valid amount");
    } else {
      this.apiHit = true;
      this.transactionForm.controls.amount.setValue(this.transactionForm.controls.amount.value * 1)
      this.transactionService.create(this.transactionForm.value).subscribe(res => {
        this.apiHit = false;
        if (res["status"]) {
          this.toastr.success(res["message"]);
          this.router.navigate(["/"]);
        } else {
          this.toastr.error(res["message"]);
        }
      });
    }
  }
}
