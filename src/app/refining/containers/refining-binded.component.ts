import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-refining-binded',
  templateUrl: './refining-binded.component.html',
  styleUrls: ['./refining-binded.component.scss'],
})
export class RefiningBindedComponent {
  @Input() bindedForm!: FormGroup;

  constructor() {}
}
