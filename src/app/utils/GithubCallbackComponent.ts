// github-callback.component.ts
import { Component, OnInit } from '@angular/core';
import { GithubAuthService } from './GithubAuthService';


@Component({
  selector: 'app-github-callback',
  template: 'Redirecting...',
})
export class GithubCallbackComponent implements OnInit {
  constructor(private githubAuthService: GithubAuthService) {}

  ngOnInit(): void {
    this.githubAuthService.handleCallback();
  }
}
