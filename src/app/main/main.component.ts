import { Component, OnInit, HostListener} from '@angular/core';

// declare var $: any;

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  // providers: [ProductsService, CartService, WishlistService]
})
export class MainComponent implements OnInit {
  public storeData;
  public url : any; 
  public loadAll : boolean = false;

  constructor() {
  }

  ngOnInit() {  
  }

}
