import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { imprintOptions } from '../functions/const';

@Component({
  selector: 'app-imprint-autocomplete',
  templateUrl: './imprint-autocomplete.component.html',
  styleUrls: ['./imprint-autocomplete.component.scss'],
})
export class ImprintAutocompleteComponent implements OnInit {
  @Input() value!: string;
  @Output() valueChange = new EventEmitter<string>();

  imprintOptions = imprintOptions;

  constructor() {}

  ngOnInit(): void {}

  filterImprint(name: string) {
    return imprintOptions.filter((x) => x.includes(name));
  }
}
