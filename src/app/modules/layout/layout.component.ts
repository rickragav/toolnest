import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet, Event } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  
  
})
export class LayoutComponent implements OnInit {
  private mainContent: HTMLElement | null = null;

  constructor(private router: Router) {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        if (this.mainContent) {
          this.mainContent!.scrollTop = 0;
        }
      }
    });
  }

  ngOnInit(): void {
   // this.mainContent = document.getElementById('main-content');
  }
}
