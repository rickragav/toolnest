// tracking.service.ts
import { Injectable } from '@angular/core';

import { AngularFireAnalytics } from '@angular/fire/compat/analytics';

@Injectable({
  providedIn: 'root',
})
export class TrackingService {
  constructor(private analytics: AngularFireAnalytics) {}

  trackPageView() {
    this.analytics.logEvent('page_view');
  }

  trackCustomEvent(eventName: string, params?: { [key: string]: any }) {
    this.analytics.logEvent(eventName, params);
  }

  // Add more tracking methods as needed
}
