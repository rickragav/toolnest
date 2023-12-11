// github-auth.service.ts
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { UtilsService } from './UtilsService';

@Injectable({
  providedIn: 'root',
})

//https://toolnest.fun/login.php?code=4032cecb4b2aa593d772&redirect_uri=http://localhost:4200/github-callback
//https://toolnest.fun/userinfo.php?token=ghu_3b9KSN2WM3iLPHRvss0I8l4Up92rFt1uy7nb
export class GithubAuthService {
  constructor(
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute,
    private utilService: UtilsService,
    @Inject(DOCUMENT) private document: Document,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  //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
  //http://localhost:4200/github-callback?user=%257B%2522login%2522%253A%2522rickragav%2522%252C%2522id%2522%253A125779699%252C%2522node_id%2522%253A%2522U_kgDOB38-8w%2522%252C%2522avatar_url%2522%253A%2522https%253A%255C%252F%255C%252Favatars.githubusercontent.com%255C%252Fu%255C%252F125779699%253Fv%253D4%2522%252C%2522gravatar_id%2522%253A%2522%2522%252C%2522url%2522%253A%2522https%253A%255C%252F%255C%252Fapi.github.com%255C%252Fusers%255C%252Frickragav%2522%252C%2522html_url%2522%253A%2522https%253A%255C%252F%255C%252Fgithub.com%255C%252Frickragav%2522%252C%2522followers_url%2522%253A%2522https%253A%255C%252F%255C%252Fapi.github.com%255C%252Fusers%255C%252Frickragav%255C%252Ffollowers%2522%252C%2522following_url%2522%253A%2522https%253A%255C%252F%255C%252Fapi.github.com%255C%252Fusers%255C%252Frickragav%255C%252Ffollowing%257B%255C%252Fother_user%257D%2522%252C%2522gists_url%2522%253A%2522https%253A%255C%252F%255C%252Fapi.github.com%255C%252Fusers%255C%252Frickragav%255C%252Fgists%257B%255C%252Fgist_id%257D%2522%252C%2522starred_url%2522%253A%2522https%253A%255C%252F%255C%252Fapi.github.com%255C%252Fusers%255C%252Frickragav%255C%252Fstarred%257B%255C%252Fowner%257D%257B%255C%252Frepo%257D%2522%252C%2522subscriptions_url%2522%253A%2522https%253A%255C%252F%255C%252Fapi.github.com%255C%252Fusers%255C%252Frickragav%255C%252Fsubscriptions%2522%252C%2522organizations_url%2522%253A%2522https%253A%255C%252F%255C%252Fapi.github.com%255C%252Fusers%255C%252Frickragav%255C%252Forgs%2522%252C%2522repos_url%2522%253A%2522https%253A%255C%252F%255C%252Fapi.github.com%255C%252Fusers%255C%252Frickragav%255C%252Frepos%2522%252C%2522events_url%2522%253A%2522https%253A%255C%252F%255C%252Fapi.github.com%255C%252Fusers%255C%252Frickragav%255C%252Fevents%257B%255C%252Fprivacy%257D%2522%252C%2522received_events_url%2522%253A%2522https%253A%255C%252F%255C%252Fapi.github.com%255C%252Fusers%255C%252Frickragav%255C%252Freceived_events%2522%252C%2522type%2522%253A%2522User%2522%252C%2522site_admin%2522%253Afalse%252C%2522name%2522%253Anull%252C%2522company%2522%253Anull%252C%2522blog%2522%253A%2522%2522%252C%2522location%2522%253Anull%252C%2522email%2522%253Anull%252C%2522hireable%2522%253Anull%252C%2522bio%2522%253Anull%252C%2522twitter_username%2522%253Anull%252C%2522public_repos%2522%253A9%252C%2522public_gists%2522%253A2%252C%2522followers%2522%253A0%252C%2522following%2522%253A0%252C%2522created_at%2522%253A%25222023-02-19T03%253A13%253A28Z%2522%252C%2522updated_at%2522%253A%25222023-12-07T15%253A35%253A37Z%2522%257D

  login(): void {
    const authUrl = `https://toolnest.fun/api/github-login.php`;
    this.document.location.href = authUrl;
  }

  handleCallback(): void {
    this.route.queryParams.subscribe((params) => {
      // Access individual query parameters
      const user_data = params['user'];
      // Check if running on the client side
      if (isPlatformBrowser(this.platformId)) {
        // Use localStorage here
        localStorage.setItem(
          'user_data',
          this.decodeUrlEncodedData(user_data)
        );
        
      } else {
        console.log('not browser');
      }
    });
  }

  decodeUrlEncodedData(encodedData: string): any {
    try {
      // Decode the URL-encoded data
      const decodedData = decodeURIComponent(encodedData);

      // Parse the JSON data
      const jsonData = JSON.parse(decodedData);

      return jsonData;
    } catch (error) {
      console.error('Error decoding URL-encoded data:', error);
      return null;
    }
  }
}
