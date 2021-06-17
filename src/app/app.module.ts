import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import {APP_BASE_HREF} from '@angular/common';
import {RouterModule} from '@angular/router';
import{FormsModule}from'@angular/forms';

import { MedicineListComponent } from './medicine-list/medicine-list.component';
import { AboutMedicineComponent } from './about-medicine/about-medicine.component';
import { HomepageMedicineComponent } from './homepage-medicine/homepage-medicine.component';
import { HeaderMedicineComponent } from './header-medicine/header-medicine.component';
import { FrameworkMedicineComponent } from './framework-medicine/framework-medicine.component';
import { CreateMedicineComponent } from './create-medicine/create-medicine.component';
import { DetailsMedicineComponent } from './details-medicine/details-medicine.component';
import { DeleteMedicineComponent } from './delete-medicine/delete-medicine.component';
import { UpdateMedicineComponent } from './update-medicine/update-medicine.component';

@NgModule({
  declarations: [
    MedicineListComponent,
    AboutMedicineComponent,
    HomepageMedicineComponent,
    HeaderMedicineComponent,
    FrameworkMedicineComponent,
    CreateMedicineComponent,
    DetailsMedicineComponent,
    DeleteMedicineComponent,
    UpdateMedicineComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path:'',
        component:HomepageMedicineComponent
      },
      {
        path:'about',
        component:AboutMedicineComponent
      },
      {
        path:'create',
        component:CreateMedicineComponent
      },
      {
        path:'medicines/:medicineid',
        component:DetailsMedicineComponent
      },
      {
        path:'medicines/delete/:medicineid',
        component:DeleteMedicineComponent
      },
      {
        path:'medicines/update/:medicineid',
        component:UpdateMedicineComponent
      }
    ])
  ],
  providers: [{provide:APP_BASE_HREF,useValue:'/'}],
  bootstrap: [FrameworkMedicineComponent]
})
export class AppModule { }
