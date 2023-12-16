import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { UtilsService } from '../../../../utils/UtilsService';
import { TrackingService } from '../../../../utils/TrackingService';

@Component({
  selector: 'app-base64-encoder',
 
  templateUrl: './base64-encoder.component.html',
  styleUrl: './base64-encoder.component.scss'
})
export class Base64EncoderComponent implements OnInit {

  text!: any;
  base64EncodedText!: any;

  //https://www.onely.com/blog/how-to-fix-redirect-error-in-google-search-console/

  constructor(private router: Router, private utilsService: UtilsService,private trackingService: TrackingService) {}
  ngOnInit(): void {
    // Log page view and custom event
    this.trackingService.trackPageView();
    this.trackingService.trackCustomEvent('base64_encoder', { custom_param: 'custom_value' });
  }

  onclickSwitchToDecoder() {
    this.router.navigate(['/dashboard/base64-decoder']);
  }

  encodeBase64() {
   
      this.base64EncodedText = this.utilsService.base64Encode(this.text);
      this.trackingService.trackCustomEvent('base64_encoder', { encodeButtonClicked: 'true' });
    
  }

}
