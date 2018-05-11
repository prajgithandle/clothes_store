import { Component, OnInit } from '@angular/core';

import { Dress } from '../dress';
import { DressService } from '../dress.service';
@Component({
  selector: 'app-dresses',
  templateUrl: './dresses.component.html',
  styleUrls: ['./dresses.component.css']
})
export class DressesComponent implements OnInit {
 dresses: Dress[];
 selectedDress: Dress;

  constructor(private dressService: DressService) { }

  ngOnInit() {
    this.getDresses();
  }

  getDresses(): void {
    this.dresses = this.dressService.getDresses();
    console.log(this.dresses);
    // .subscribe(dresses => this.dresses = dresses);
  }

  add(name: string): void {
//    let id = 20;
  //  name = name.trim();
   // if (!name) { return; }
     //this.dresses.push({name, id:id+ 1,color: 'black'});
    // this.dressService.addDress({ name } as Dress)
    //   .subscribe(dress => {
    //     this.dresses.push(dress);
    //   });
  }

  delete(dress: Dress): void {
    this.dresses = this.dresses.filter(h => h !== dress);
    // this.dressService.deleteDress(dress).subscribe();
  }
   onSelect(dress: Dress): void {
    this.selectedDress = dress;
  }

}
