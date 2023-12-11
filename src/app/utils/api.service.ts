import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  apiUrl = 'https://gaudy-peat-plum.glitch.me'

  getToolsList() {
    var params = new HttpParams();

    var httpOptions = {
      params: params,
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    };

    return this.http.get('https://toolnest.fun/landing.php', httpOptions);
  }

  // Method to minify HTML
  minifyHtml(htmlContent: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/minify-html`, { htmlContent:htmlContent });
  }
}
