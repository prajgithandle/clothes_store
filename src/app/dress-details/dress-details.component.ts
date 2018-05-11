import { Component, OnInit, Input } from '@angular/core';
import { Dress } from '../dress';

@Component({
  selector: 'app-dress-details',
  templateUrl: './dress-details.component.html',
  styleUrls: ['./dress-details.component.css']
})
export class DressDetailsComponent implements OnInit {
  @Input() dress: Dress;
  constructor() { 
    
  }

  ngOnInit() {
   
  }

}
