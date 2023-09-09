import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Event, NavigationEnd, Router } from '@angular/router';
import { Angulartics2GoogleGlobalSiteTag } from 'angulartics2';
import { Observable, filter, map, pairwise, startWith } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(map((result) => result.matches));

  @ViewChild('drawer') sidenav!: MatSidenav;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private breakpointObserver: BreakpointObserver,
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
        this.sidenav.close();
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
