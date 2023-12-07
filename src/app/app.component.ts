import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ResponsiveHelperComponent } from './modules/dashboard/components/responsive-helper/responsive-helper.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: true,
  imports: [NgClass, RouterOutlet,ResponsiveHelperComponent],
})
export class AppComponent {
  title = 'toolnest-angular';

  // constructor(public themeService: ThemeService){
  //   this.themeService.theme = !this.themeService.isDark ? 'dark' : 'light';
  // }
}
