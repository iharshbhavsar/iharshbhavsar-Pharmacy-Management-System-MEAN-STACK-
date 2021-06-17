import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { MedicineServiceService } from '../medicine-service.service';
import { Medicine } from '../medicine'

@Component({
  selector: 'app-create-medicine',
  templateUrl: './create-medicine.component.html',
  styleUrls: ['./create-medicine.component.css'],
  providers:[MedicineServiceService]
})
export class CreateMedicineComponent implements OnInit {
  public newmedicine: Medicine ={
    _id: '',
    name: '',
    disease:'',
    price:'',
    companyname:'',
    quantity:'',
    type:'',
    effectiveness:null
  
  };

  constructor(private MedicineService : MedicineServiceService) { }

  ngOnInit(): void {
  }

  public createNewMedicine(newmedicine: Medicine): void{
    this.MedicineService.createMedicine(newmedicine);
  }

}
