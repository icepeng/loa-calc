import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Event, NavigationEnd, Router } from '@angular/router';
import { Angulartics2GoogleGlobalSiteTag } from 'angulartics2';
import { filter, map, pairwise, startWith } from 'rxjs';
import { MobileDialogComponent } from './core/components/mobile-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(
    @Inject(DOCUMENT) private document: Document,
    private dialog: MatDialog,
    router: Router,
    angulartics2GoogleAnalytics: Angulartics2GoogleGlobalSiteTag
  ) {
    angulartics2GoogleAnalytics.startTracking();

    router.events
      .pipe(
        filter(
          (event: Event): event is NavigationEnd =>
            event instanceof NavigationEnd
        )
      )
      .pipe(
        map((e) => e.urlAfterRedirects),
        startWith(''),
        pairwise()
      )
      .subscribe(([fromUrl, toUrl]) => {
        if (fromUrl !== toUrl) {
          resetScrollPosition();
        }
      });
  }

  ngOnInit() {
    const theme = localStorage.getItem('theme');
    if (theme === 'light') {
      this.lightTheme();
    }
    if (theme === 'dark') {
      this.darkTheme();
    }
    if (this.isMobile()) {
      this.dialog.open(MobileDialogComponent);
    }
  }

  isMobile() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );
  }

  darkTheme(): void {
    this.document.documentElement.classList.add('dark-theme');
    localStorage.setItem('theme', 'dark');
  }

  lightTheme(): void {
    this.document.documentElement.classList.remove('dark-theme');
    localStorage.setItem('theme', 'light');
  }
}

function resetScrollPosition() {
  if (typeof document === 'object' && document) {
    const sidenavContent = document.querySelector('.mat-drawer-content');
    if (sidenavContent) {
      sidenavContent.scrollTop = 0;
    }
  }
}
