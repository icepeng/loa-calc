import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Angulartics2GoogleGlobalSiteTag } from 'angulartics2';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { MobileDialogComponent } from './core/components/mobile-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(map((result) => result.matches));

  constructor(
    private breakpointObserver: BreakpointObserver,
    private dialog: MatDialog,
    angulartics2GoogleAnalytics: Angulartics2GoogleGlobalSiteTag
  ) {
    angulartics2GoogleAnalytics.startTracking();
  }

  ngOnInit() {
    if (this.isMobile()) {
      this.dialog.open(MobileDialogComponent);
    }
  }

  isMobile() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );
  }
}
