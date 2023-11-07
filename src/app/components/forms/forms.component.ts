import { Location } from 'src/app/types/location.interface.ts';
import { GetUnitService } from 'src/app/services/get-unit.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FilterUnitsService } from 'src/app/services/filter-units.service';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss'],
})
export class FormsComponent implements OnInit {
  @Output() submitEvent = new EventEmitter();
  results: Location[] = [];
  filterResults: Location[] = [];
  formGroup!: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private unitService: GetUnitService,
    private filterUnitsService: FilterUnitsService
  ) {}
  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      hour: '',
      showClosed: true,
    });
    this.unitService.getAllUnits().subscribe((data) => {
      this.results = data;
      this.filterResults = data;
    });
  }

  onSubmit(): void {
    let { showClosed, hour } = this.formGroup.value;
    this.filterResults = this.filterUnitsService.filter(
      this.results,
      showClosed,
      hour
    );
    this.unitService.setFilterUnits(this.filterResults);

    this.submitEvent.emit();
  }

  onClean(): void {
    this.formGroup.reset();
  }
}
