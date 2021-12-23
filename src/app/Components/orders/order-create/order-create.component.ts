import { Component, NgZone, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormBuilder, FormGroupDirective  } from '@angular/forms';
import { Router } from '@angular/router';
import { OrdersService } from '../orders.service';

@Component({
  selector: 'app-order-create',
  templateUrl: './order-create.component.html',
  styleUrls: ['./order-create.component.scss']
})
export class OrderCreateComponent implements OnInit {

  orderForm: FormGroup;
  OrderArr: any = [];

  constructor(
    public fb: FormBuilder,
    private ngZone: NgZone,
    private router: Router,
    public orderService: OrdersService) {
      
      this.orderForm = this.fb.group({
        descr: [''],
        tipo: [null],
        pallets: [null]
      })

     }

  ngOnInit(): void {}


 /*  onOrderAdded(form: NgForm){
    if (form.invalid) {
      return
    }
    this.orderService.CreateOrder({descr:form.value.descr,tipo:form.value.tipo,pallets:form.value.pallets});
    console.log('Order added!')
    form.resetForm();
  } */

  /* submitForm() {
    var formData: any = new FormData();
    formData.append("descr", this.orderForm.get('order_descr').value);
    formData.append("tipo", this.orderForm.get('order_tipo').value);
    formData.append("pallet", this.orderForm.get('order_pallet').value);
  
    this.http.post('http://localhost:4000/api/create-user', formData).subscribe(
      (response) => console.log(response),
      (error) => console.log(error)
    )
  } */

  submitForm(form: any, formDirective: FormGroupDirective): void {

    this.orderService.CreateOrder(this.orderForm.value).subscribe(res => {
      /* console.log(res);
      console.log(this.orderForm.value);
      console.log('Order added!'); */
      
      formDirective.resetForm();
      this.orderForm.reset();
    });
  }

}
