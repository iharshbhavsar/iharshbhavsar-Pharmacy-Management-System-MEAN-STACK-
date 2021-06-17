import { Injectable } from '@angular/core';
import { Medicine } from './medicine';
import {HttpClient, HttpResponse} from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class MedicineServiceService {

  private medicinesUrl = 'http://localhost:3000/api/medicines';
  constructor(private http:HttpClient){}
  getMedicines(): Promise<void | Medicine[]>{
    return this.http.get(this.medicinesUrl)
    .toPromise()
    .then(response => response as Medicine[])
    .catch(this.handleError);
  }
  getSingleMedicine(medicineid:string):Promise<void|Medicine>{
    return this.http.get(this.medicinesUrl+'/'+medicineid)
      .toPromise()
      .then(Response=>Response as Medicine)
      .catch(this.handleError);}
  private handleError(error: any){
    console.log("error");
  }
  createMedicine(newmedicine: Medicine): Promise<void | Medicine>{
    return this.http.post(this.medicinesUrl, newmedicine)
      .toPromise()
      .then(response => response as Medicine)
      .catch(this.handleError);
    }
  delSingleMedicine(medicineid:string):Promise<void|Medicine>{
      return this.http.get(this.medicinesUrl+'/delete/'+medicineid)
        .toPromise()
        .then(Response=>Response as Medicine)
        .catch(this.handleError);
      }
  updateMedicine(updatemedicineData: Medicine,medicineid: string): Promise<void | Medicine>{
        return this.http.put(this.medicinesUrl+'/update/'+medicineid, updatemedicineData)
          .toPromise()
          .then(response => response as Medicine)
          .catch(this.handleError);
        }        

  
}
