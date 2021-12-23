import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Order } from '../orders.model';
import { OrdersService } from '../orders.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss']
})
export class OrderListComponent {

  orders: Order[] = [];
  private ordersSub: Subscription;

  constructor(public orderService: OrdersService) { }
 

 


}
