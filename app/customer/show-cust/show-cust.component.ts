import { Component, OnInit } from '@angular/core';
import {SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-show-cust',
  templateUrl: './show-cust.component.html',
  styleUrls: ['./show-cust.component.css']
})
export class ShowCustComponent implements OnInit {

  constructor(private service:SharedService) { }
  CustomerList:any=[];

  ModalTitle:string;
  ActivateAddEditCustComp:boolean=false;
  cust:any;

  ngOnInit(): void {
  }
  addClick(){
    this.cust={
      Cust_Id:0,
      Cust_Name:"",
      Cust_address:"",
      Cust_Phone:"",
      // PhotoFileName:"anonymous.png"
    }
    this.ModalTitle="Add Customer";
    this.ActivateAddEditCustComp=true;

  }

  editClick(item: any){
    console.log(item);
    this.cust=item;
    this.ModalTitle="Edit Customer";
    this.ActivateAddEditCustComp=true;
  }

  deleteClick(item: { CustomerId: any; }){
    if(confirm('Are you sure??')){
      this.service.deleteCustomer(item.CustomerId).subscribe((data: { toString: () => any; })=>{
        alert(data.toString());
        this.refreshCustList();
      })
    }
  }

  closeClick(){
    this.ActivateAddEditCustComp=false;
    this.refreshCustList();
  }


  refreshCustList(){
    this.service.getCustList().subscribe(data=>{
      this.CustomerList=data;
    });
  }

}
