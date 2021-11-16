import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  constructor(private titleService: Title) {
    this.titleService.setTitle('LoaCalc - 로스트아크 최적화 계산기');
  }
}
