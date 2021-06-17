import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage-medicine',
  templateUrl: './homepage-medicine.component.html',
  styleUrls: ['./homepage-medicine.component.css']
})
export class HomepageMedicineComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }
  pageContent = {
    header: {
    title: '',
    body: 'This is a list of Medicine'
  }
};
}
