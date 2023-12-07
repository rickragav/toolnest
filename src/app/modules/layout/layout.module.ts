import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NftHeaderComponent } from '../dashboard/components/nft-header/nft-header.component';
import { FooterComponent } from '../dashboard/components/footer/footer.component';
import { BottomNavbarComponent } from '../dashboard/components/bottom-navbar/bottom-navbar.component';
@NgModule({
  imports: [LayoutRoutingModule, HttpClientModule,FormsModule,CommonModule],
  declarations:[NftHeaderComponent,LayoutComponent,FooterComponent,BottomNavbarComponent],
  exports:[NftHeaderComponent]
  
})
export class LayoutModule {}
