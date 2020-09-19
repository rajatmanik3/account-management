import { Component, Inject, OnInit, OnDestroy, Input } from '@angular/core';

import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  // @Input() storeData:any;
  @Input() url:any;

  constructor(
  ) {
  }

  ngOnInit() {
  }

  ngOnDestroy() {
  }

}
   
