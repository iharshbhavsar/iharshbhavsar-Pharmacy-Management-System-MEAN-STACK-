import { Component, OnInit } from '@angular/core';
import { Medicine } from '../medicine';
import { MedicineServiceService } from "../medicine-service.service";

@Component({
  selector: 'app-medicine-list',
  templateUrl: './medicine-list.component.html',
  styleUrls: ['./medicine-list.component.css']
})
export class MedicineListComponent implements OnInit {
medicines:Medicine[]
  constructor( private MedicineService: MedicineServiceService) {  }ngOnInit(): void {this.MedicineService.getMedicines()
    .then((medicines: Medicine[])=>{this.medicines = medicines.map(medicine =>{return medicine;});
});
  }
}
