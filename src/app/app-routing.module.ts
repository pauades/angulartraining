import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Container1Component } from './components/container1/container1.component';


const routes: Routes = [
    { path: 'container1', component: Container1Component },
    { path: 'things-list', loadChildren: () => import('./things/things.module').then(m => m.ThingsModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
