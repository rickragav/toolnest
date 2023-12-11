import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root',
})
export class UtilsService {
  constructor(private apiService: ApiService) {}
  base64Decode(base64String: string): string {
    if (!base64String) {
      return '';
    }
    try {
      if (base64String.includes('&')) {
        const decodedParts = base64String
          .split('&')
          .map((part) => part.split('$').map(atob).join(''));
        return decodedParts.join('');
      } else {
        return atob(base64String);
      }
    } catch (error: any) {
      // this.toastr.error(error.message);
      return '';
    }
  }

  base64Encode(data: string): string {
    if (!data) {
      return '';
    }
    try {
      return btoa(data);
    } catch (error: any) {
      // this.toastr.error(error.message);
      return '';
    }
  }

  async minifyHtml(data: string): Promise<string> {
    if (!data) {
      return '';
    }

    try {
      const response = await this.apiService.minifyHtml(encodeURIComponent(data)).toPromise();
      return response.minifiedHtml;
    } catch (error) {
      console.error('Error:', error);
      return '';
    }
  }
}
