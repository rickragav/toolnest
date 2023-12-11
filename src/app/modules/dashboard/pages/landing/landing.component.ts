import {
  AfterViewInit,
  Component,
  ElementRef,
  Inject,
  OnInit,
  PLATFORM_ID,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Router } from '@angular/router';
import { ApiService } from '../../../../utils/api.service';
import { GithubAuthService } from '../../../../utils/GithubAuthService';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss',
})
export class LandingComponent implements OnInit, AfterViewInit {
  developerTools: any;
  threshold = '0.5';

  constructor(
    private apiService: ApiService,
    private router: Router,
    private githubService: GithubAuthService,
    @Inject(PLATFORM_ID) private platformId: any,
    private renderer: Renderer2
  ) {}
  ngOnInit(): void {
    // this.apiService.getToolsList().subscribe(
    //   (data) => {
    //     this.developerTools = data;
    //     console.log('Api ToolLists success ' + data);
    //   },
    //   (err) => {
    //     console.log('Api Failed ' + err);
    //   },
    // );

    this.developerTools = [
      {
        name: 'Base64 Text Encoder',
        description:
          'Easily convert text to Base64 with various advanced options.',
        text: 'iVBORw0KGgoAAAANSUhEUgAAC0AAAAcICAYAAACv5EAVAAAMPWlDQ1BJQ0MgUHJvZmlsZQAASImVVwdYU8kWn/\n                   AlBBaAOndRkgChBJjIKjYkUUF14KKBWzoqohip9kRO4ti74sFFWVdLNiVNymg677yvfm+mfnvP2f+c+bcuWUA/\n                   UD/OFYtzUQ0A8kQFktiQAEZySiqD9BSQARWowtacy8sXs6KjIwAsg/3fy7vrAJH1VxxkWv8c/69Fky/I5wGAR/\n                   Oczs/n5UF8AAC8mieWFABAlPHmUwrEMgwr0JbAACFeIMOZClwtw+kKvEduEx/LhrgNABUqlyvJBEDtEuQZhbx/\n                   MqKHWB7GTiC8UAaDOgNg3L28SH+I0iG2gjRhimT4z/QedzL9ppg9pcrmZQ1ixFnlRCRTmi37PdPzvkpcrHfRh/\n                   BSs1SxIaK1szzNvNnEnhMkyFuFeUHhkFsRbEH4R8uT3EKCVLGpqgsEcNeflsmDOgC7ETnxsYDrEhxMGi3MgIJ/',
        route: '/dashboard/base64-encoder',
      },
      {
        name: 'Base64 Text Decoder',
        description:
          'Easily convert Base64 text to String with various advanced options.',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        route: '/dashboard/base64-decoder',
      },
      {
        name: 'Html Minifier',
        description:
          'Efficiently compress HTML code, reduce file sizes, and improve performance with a simple HTML minifier tool.',
        text: '<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><metaname="viewport" content="width=device-width,initial-scale=1"><title>Sample HTML for Minification Testing</title><style>body{font-family:Arial,sans-serif;background-color:#f0f0f0}h1{color:#333}</style><script>function showAlert(){alert("Hello, this is an alert!")}</script></head><body><h1>Sample HTML for Minification Testing</h1><p>This is a sample paragraph with some <b>bold</b> and <i>italic</i> text.</p><button onclick=showAlert()>Click me</button></body></html>        ',
        route: '/dashboard/html-minifyer',
      },
    ];
  }

  onToolItem(route: any) {
    console.log('route' + route);
    this.router.navigate([route]);
  }

  githubLogin() {
    this.githubService.login();
  }

  ngAfterViewInit() {
    // Check if running in a browser environment
    if (isPlatformBrowser(this.platformId)) {
      // Your script here
      const heroSection = document.getElementById('heroSection');
      const bgSection = document.getElementById('bgSection');
      const popularTools = document.getElementById('popularTools');

      const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1,
      };

      const observerZoom = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate__animated', 'animate__zoomIn');
            observer.unobserve(entry.target);
          }
        });
      }, observerOptions);

      const observerSlide = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(
              'animate__animated',
              'animate__slideInLeft'
            );
            observer.unobserve(entry.target);
          }
        });
      }, observerOptions);

    //  observerZoom.observe(heroSection!!);
     // observerZoom.observe(bgSection!!);
      // observerSlide.observe(popularTools!!);
    }
  }

  scrollToPopularUtilities() {
    if (isPlatformBrowser(this.platformId)) {
      // Your script here
      const utilitiesSection = document.getElementById('utilitiesSection');
      // const popularTools = document.getElementById('popularTools');
      utilitiesSection!!.scrollIntoView({ behavior: 'smooth' });
      // popularTools!!.classList.add('animate__animated', 'animate__slideInLeft');
    }

    // Adjust the time according to the duration of the fadeInUp animation
  }
}
