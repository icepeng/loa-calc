import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Angulartics2Module } from 'angulartics2';
import { AdsenseModule } from 'ng2-adsense';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { DonateModule } from './donate/donate.module';
import { HomeModule } from './home/home.module';
import { ImprintingModule } from './imprinting/imprinting.module';
import { RefiningModule } from './refining/refining.module';
import { StoneModule } from './stone/stone.module';
import { TripodModule } from './tripod/tripod.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CoreModule,
    HomeModule,
    RefiningModule,
    ImprintingModule,
    TripodModule,
    StoneModule,
    DonateModule,
    MatToolbarModule,
    MatButtonModule,
    MatDialogModule,
    MatSidenavModule,
    MatMenuModule,
    MatIconModule,
    AppRoutingModule,
    Angulartics2Module.forRoot(),
    AdsenseModule.forRoot({
      adClient: 'ca-pub-6238355772969385',
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
