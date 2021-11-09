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
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { ImprintingModule } from './imprinting/imprinting.module';
import { RefiningModule } from './refining/refining.module';
import { TripodModule } from './tripod/tripod.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CoreModule,
    RefiningModule,
    ImprintingModule,
    TripodModule,
    MatToolbarModule,
    MatButtonModule,
    MatDialogModule,
    MatSidenavModule,
    MatMenuModule,
    MatIconModule,
    AppRoutingModule,
    Angulartics2Module.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
