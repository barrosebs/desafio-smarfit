import { Location } from 'src/app/types/location.interface.ts';
import { GetUnitService } from 'src/app/services/get-unit.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss'],
})
export class FormsComponent implements OnInit {
  results: Location[] = [];
  filterResults: Location[] = [];
  formGroup!: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private unitService: GetUnitService
  ) {}
  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      hour: '',
      showClosed: true,
    });
    this.unitService.getAllUnits().subscribe((data) => {
      this.results = data.locations;
      this.filterResults = data.locations;
    });
  }

  onSubmit(): void {
    if (this.formGroup.value.showClosed) {
      this.filterResults = this.results.filter(
        (location) => location.opened === true
      );
    } else {
      this.filterResults = this.results;
    }
  }

  onClean(): void {
    this.formGroup.reset();
  }
}
