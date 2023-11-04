import { GetUnitService } from './../../services/get-unit.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss'],
})
export class FormsComponent {
  results = [];
  formGroup!: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private unitService: GetUnitService
  ) {}
  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      hour: '',
      showClosed: false,
    });
    this.unitService.getAllUnit().subscribe((data) => console.log(data));
  }

  onSubmit(): void {
    console.log(this.formGroup.valid);
  }

  onClean(): void {
    this.formGroup.reset();
  }
}
