import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app.routes';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { DashboardRoutingModule } from './modules/dashboard/dashboard-routing.module';

@NgModule({
  imports: [BrowserModule, AppRoutingModule, CommonModule,DashboardRoutingModule, RouterOutlet],
  
})
export class AppModule {}
