import { Component, Input, OnInit } from '@angular/core';
import { GetUnitService } from 'src/app/services/get-unit.service';
import { Location } from 'src/app/types/location.interface.ts';

@Component({
  selector: 'app-cards-list',
  templateUrl: './cards-list.component.html',
  styleUrls: ['./cards-list.component.scss'],
})
export class CardsListComponent implements OnInit {
  @Input() unitsList: Location[] = [];
  constructor() {}
  ngOnInit(): void {
    console.log(this.unitsList);
  }
}
