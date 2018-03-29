import { NgModule }     from '@angular/core';
import {
  RouterModule, Routes,
} from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ErrComponent } from './pages/err/err.component';



const appRoutes: Routes = [
  {
    path: 'index',
    component: HomeComponent,
    // outlet: 'popup'
  },
//   {
//     path: 'admin',
//     loadChildren: 'app/admin/admin.module#AdminModule',
//     canLoad: [AuthGuard]
//   },
//   {
//     path: 'crisis-center',
//     loadChildren: 'app/crisis-center/crisis-center.module#CrisisCenterModule'
//   },
  { path: '',   redirectTo: '/index', pathMatch: 'full' },
  { path: '**', component: ErrComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
    )
  ],
  exports: [
    RouterModule
  ],
  // 添加provider会导致该路由模块失败
  //providers: [
    // CanDeactivateGuard
  //]
})
export class AppRoutingModule {}