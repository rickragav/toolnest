import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

export const routes: Routes = [
  // {path:"",component:AppComponent,pathMatch:'full'},
  // {path:"about",component:AppComponent,pathMatch:'full'},
  // {path:"about1",component:AppComponent,pathMatch:'full'},
  // {path:"abou2",component:AppComponent,pathMatch:'full'},
  // {path:"about3",component:AppComponent,pathMatch:'full'},
  // { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  {
    path: '',
    loadChildren: () =>
      import('./modules/layout/layout.module').then((m) => m.LayoutModule),
  },
  //   {
  //     path: 'auth',
  //     loadChildren: () => import('./modules/auth/auth.module').then((m) => m.AuthModule),
  //   },
  { path: '**', redirectTo: 'error/404' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
