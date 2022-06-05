import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  readonly APIUrl="http://localhost:53535/api";
readonly PhotoUrl = "http://localhost:53535/Photos/";
 
 

  constructor(private http:HttpClient) { }

  getDepList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/department');
  }

  addDepartment(val:any){
    return this.http.post(this.APIUrl+'/Department',val);
  }

  updateDepartment(val:any){
    return this.http.put(this.APIUrl+'/Department',val);
  }

  deleteDepartment(val:any){
    return this.http.delete(this.APIUrl+'/Department/'+val);
  }


  getCustList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/department');
  }

  addCustomer(val:any){
    return this.http.post(this.APIUrl+'/department',val);
  }

  updateCustomer(val:any){
    return this.http.put(this.APIUrl+'/department',val);
  }

  deleteCustomer(val:any){
    return this.http.delete(this.APIUrl+'/department/'+val);
  }


  // UploadPhoto(val:any){
  //   return this.http.post(this.APIUrl+'/Employee/SaveFile',val);
  // }

  // getAllDepartmentNames():Observable<any[]>{
  //   return this.http.get<any[]>(this.APIUrl+'/Employee/GetAllDepartmentNames');
  // }
}
