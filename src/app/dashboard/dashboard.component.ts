import { Component, OnInit } from '@angular/core';
import { Dress } from '../dress';
import { DressService } from '../dress.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
dresses:Dress[] = [];

constructor(private dressService: DressService) { }

ngOnInit() {
  this.getDresses();
}
getDresses(): void {
  this.dressService.getDresses().subscribe(dress => this.dresses = this.dresses.slice(1, 5));
 }
}
