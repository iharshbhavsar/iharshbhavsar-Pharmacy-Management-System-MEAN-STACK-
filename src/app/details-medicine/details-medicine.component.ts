import { Component, OnInit } from '@angular/core';
import{Medicine}from'../medicine';
import{MedicineServiceService}from'../medicine-service.service';
import{switchMap}from'rxjs/operators';
import{ActivatedRoute,Params}from'@angular/router';


@Component({
  selector: 'app-details-medicine',
  templateUrl: './details-medicine.component.html',
  styleUrls: ['./details-medicine.component.css'],
  providers:[MedicineServiceService]
})
export class DetailsMedicineComponent implements OnInit {


  constructor(private MedicineService:MedicineServiceService,private route:ActivatedRoute) { }

  newmedicine:Medicine;
  pageContent ={
    header: {
      title:'', body:''
    }
  };

  ngOnInit(): void {
    this.route.params.pipe(switchMap((params: Params) => {
      return this.MedicineService.getSingleMedicine(params.medicineid);
    }))
      .subscribe((newmedicine:Medicine) => {
        console.log('Selected Medicine', newmedicine);
        this.newmedicine = newmedicine;
        //this.pageContent.header.title = newmedicine.name;
        this.pageContent.header.body = 'Details for ' + newmedicine.name + ' Medicine';
      });

    }
  }