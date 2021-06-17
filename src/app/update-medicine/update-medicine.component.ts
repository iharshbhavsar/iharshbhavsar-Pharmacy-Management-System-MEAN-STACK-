import { Component, OnInit } from '@angular/core';
import{Medicine}from'../medicine';
import{MedicineServiceService}from'../medicine-service.service';
import{switchMap}from'rxjs/operators';
import{ActivatedRoute,Params}from'@angular/router';

@Component({
  selector: 'app-update-medicine',
  templateUrl: './update-medicine.component.html',
  styleUrls: ['./update-medicine.component.css'],
  providers:[MedicineServiceService]

})
export class UpdateMedicineComponent implements OnInit {
  public selectedMedicine: Medicine ={
    _id: '',
    name: '',
    disease:'',
    price:'',
    companyname:'',
    quantity:'',
    type:'',
    effectiveness:null
  
  };
  constructor(private MedicineService : MedicineServiceService,private route:ActivatedRoute) { }
  
  pageContent ={
    header: {
      title:'', body:''
    }
  }

  ngOnInit(): void {
    this.route.params.pipe(switchMap((params: Params) => {
      
      return this.MedicineService.getSingleMedicine(params.medicineid)
    }))

    .subscribe((selectedMedicine:Medicine) => {
       // console.log(selectedBook);
        this.selectedMedicine = selectedMedicine;
         this.pageContent.header.title = selectedMedicine.name;
        this.pageContent.header.body = 'Details for selected Medicine';
  });

  }
  updatenewMedicine(selectedMedicine:Medicine):void{
    
   
   this.MedicineService.updateMedicine(selectedMedicine,selectedMedicine._id);

  }
}
