import { NgModule } from '@angular/core';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { FormsModule } from '@angular/forms';
import { Base64ImageDecoderComponent } from './pages/base64-image-decoder/base64-image-encoder-decoder.component';
import { CommonModule } from '@angular/common';
import { Base64ImageEncoderComponent } from './pages/base64-image-encoder/base64-image-encoder.component';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { Base64DecoderComponent } from './pages/base64-decoder/base64-decoder.component';
import { Base64EncoderComponent } from './pages/base64-encoder/base64-encoder.component';
import { UtilsService } from '../../utils/UtilsService';
import { ApiService } from '../../utils/api.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [DashboardRoutingModule, FormsModule, CommonModule, ClipboardModule,HttpClientModule],
  declarations: [HomeComponent, Base64ImageDecoderComponent, Base64ImageEncoderComponent,Base64DecoderComponent,Base64EncoderComponent],
  providers: [ApiService,UtilsService],
})
export class DashboardModule {}
