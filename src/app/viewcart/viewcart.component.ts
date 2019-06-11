import { Component, OnInit } from '@angular/core';
import { IPayPalConfig,ICreateOrderRequest } from 'ngx-paypal';

@Component({
  selector: 'app-viewcart',
  templateUrl: './viewcart.component.html',
  styleUrls: ['./viewcart.component.css']
})
export class ViewcartComponent implements OnInit {

  CartList:any[];
  totalPrice=0;
  public payPalConfig ? : IPayPalConfig;
  showSuccess: boolean;
  showCancel: boolean;
  showError: boolean;
  constructor() { }



  ngOnInit() {
    var viewcart = localStorage.getItem('cart')
    let viewcartList = JSON.parse(viewcart)
    console.log(viewcartList)
    this.CartList=viewcartList
    this.CartList.forEach(item=>{
      this.totalPrice +=item.productprice * item.quantity
    })

    this.initConfig()
  }

  initConfig(){
    // console.log(totalPrice)

    this.payPalConfig = {
      currency: 'GBP',
      clientId: 'sbAbie6H_tPbo1jmrxcidbM_lkdercJBjnTzrn-q4MjM_EPDS2VnEqOVZkYqBRkRad0AvZC2cnIfRc-XHl',
      createOrderOnClient: (data) => < ICreateOrderRequest > {
          intent: 'CAPTURE',
          purchase_units: [{
              amount: {
                  currency_code: 'GBP',
                  value: '9.99',
                  breakdown: {
                      item_total: {
                          currency_code: 'GBP',
                          value: '9.99'
                      }
                  }
              },
              items: [{
                  name: 'Enterprise Subscription',
                  quantity: '1',
                  category: 'DIGITAL_GOODS',
                  unit_amount: {
                      currency_code: 'GBP',
                      value: '9.99',
                  },
              }]
          }]
      },
      advanced: {
          commit: 'true'
      },
      style: {
          label: 'paypal',
          layout: 'vertical'
      },
      onApprove: (data, actions) => {
          console.log('onApprove - transaction was approved, but not authorized', data, actions);
          actions.order.get().then(details => {
              console.log('onApprove - you can get full order details inside onApprove: ', details);
          });

      },
      onClientAuthorization: (data) => {
          console.log('onClientAuthorization - you should probably inform your server about completed transaction at this point', data);
          this.showSuccess = true;
      },
      onCancel: (data, actions) => {
          console.log('OnCancel', data, actions);
          this.showCancel = true;

      },
      onError: err => {
          console.log('OnError', err);
          this.showError = true;
      },
      onClick: (data, actions) => {
          console.log('onClick', data, actions);
          this.resetStatus();
      },
  };
}
  resetStatus() {
    throw new Error("Method not implemented.");
  }
  }

