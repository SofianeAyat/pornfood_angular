import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DetailpostComponent } from './detailpost/detailpost.component';
import {WallComponent}  from './wall/wall.component';
 
const routes: Routes = [
  { path: '', redirectTo: 'wall', pathMatch: 'full' },
  { path: 'detail/:id', component: DetailpostComponent },
  { path: 'wall', component: WallComponent },
  { path: 'detailpost/:id', component: DetailpostComponent },
];
 
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
export const AppRoutingcomponents = [WallComponent,DetailpostComponent]