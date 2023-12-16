import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app.routes';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { DashboardRoutingModule } from './modules/dashboard/dashboard-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireAnalyticsModule, ScreenTrackingService } from '@angular/fire/compat/analytics';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from '../environments/environment';
import { TrackingService } from './utils/TrackingService';

@NgModule({
  imports: [
    AppRoutingModule,
    DashboardRoutingModule,
    RouterOutlet,
    BrowserAnimationsModule,
  ],
})
export class AppModule {}
