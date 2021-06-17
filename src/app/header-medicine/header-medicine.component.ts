import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-header-medicine',
  templateUrl: './header-medicine.component.html',
  styleUrls: ['./header-medicine.component.css']
})
export class HeaderMedicineComponent implements OnInit {
  @Input() content: any;
  constructor() { }

  ngOnInit(): void {
  }

}
