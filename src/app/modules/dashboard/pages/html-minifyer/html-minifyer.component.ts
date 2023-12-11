import { isPlatformBrowser } from '@angular/common';
import { AfterViewInit, Component, Inject, PLATFORM_ID } from '@angular/core';
import { ApiService } from '../../../../utils/api.service';
import { UtilsService } from '../../../../utils/UtilsService';

@Component({
  selector: 'app-html-minifyer',
  templateUrl: './html-minifyer.component.html',
  styleUrl: './html-minifyer.component.scss',
})
export class HtmlMinifyerComponent implements AfterViewInit {
  htmltext!: any;
  minifiedHtml!: any;

  scriptLoaded = false;

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private utilService: UtilsService
  ) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {}

  async minifyHTML() {
    this.minifiedHtml = await this.utilService.minifyHtml(this.htmltext);
  }
}
