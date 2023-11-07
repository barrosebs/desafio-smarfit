import { GetUnitService } from 'src/app/services/get-unit.service';
import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Location } from './types/location.interface.ts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  showList = new BehaviorSubject(false);
  unitsList: Location[] = [];
  constructor(private unitService: GetUnitService) {}
  onSubmit() {
    this.unitsList = this.unitService.getFilteredUnits();
    this.showList.next(true);
  }
}
