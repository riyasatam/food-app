import { Component, Input, OnInit } from '@angular/core';
import { Customer } from 'src/app/customer.model';
import {SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-cust',
  templateUrl: './add-edit-cust.component.html',
  styleUrls: ['./add-edit-cust.component.css']
})
export class AddEditCustComponent implements OnInit {
  @Input() customer: Customer;
  Cust_address: any;
  Cust_Name: any;
  Cust_Id: any;
  Cust_Phone: any;
  

  constructor(private service:SharedService) { 
  
    this.customer = {
      Cust_Name: '',
      Cust_address: '',
      Cust_Phone: 0,
     
    };
  

  }

  ngOnInit(): void {
   // this.loadDepartmentList();
  }
  // loadDepartmentList(){
  //   this.service.getAllDepartmentNames().subscribe((data:any)=>{
  //     this.DepartmentsList=data;

  //     this.EmployeeId=this.emp.EmployeeId;
  //     this.EmployeeName=this.emp.EmployeeName;
  //     this.Department=this.emp.Department;
  //     this.DateOfJoining=this.emp.DateOfJoining;
  //     this.PhotoFileName=this.emp.PhotoFileName;
  //     this.PhotoFilePath=this.service.PhotoUrl+this.PhotoFileName;
  //   });
  // }

  addCustomer(){
    var val = {Cust_Id:this.Cust_Id,
                Cust_Name:this.Cust_Name,
                Cust_address:this.Cust_address,
                Cust_Phone:this.Cust_Phone
            // PhotoFileName:this.PhotoFileName
          };

    this.service.addCustomer(val).subscribe(res=>{
      alert(res.toString());
    });
  }

  updateCustomer(){
    var val = {Cust_Id:this.Cust_Id,
      Cust_Name:this.Cust_Name,
      Cust_address:this.Cust_address,
      Cust_Phone:this.Cust_Phone
 // PhotoFileName:this.PhotoFileName
};

    this.service.updateCustomer(val).subscribe(res=>{
    alert(res.toString());
    });
  }


  // uploadPhoto(event){
  //   var file=event.target.files[0];
  //   const formData:FormData=new FormData();
  //   formData.append('uploadedFile',file,file.name);

  //   this.service.UploadPhoto(formData).subscribe((data:any)=>{
  //     this.PhotoFileName=data.toString();
  //     this.PhotoFilePath=this.service.PhotoUrl+this.PhotoFileName;
  //   })
  // }

}

