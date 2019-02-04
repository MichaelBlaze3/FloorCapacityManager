import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ViewersComponent } from '../viewers/viewers.component';
import { FloorsComponent } from '../floors/floors.component';
import { FloorDatailsComponent } from '../floor-datails/floor-datails.component';
const myRoutes: Routes = [
  { path: 'public', component: ViewersComponent },
  { path: 'login', loadChildren: '../loginModule/login.module#LoginModule'  },
  { path: 'floors', component: FloorsComponent },
  { path: 'floor/:id', component: FloorDatailsComponent },
  { path: '', redirectTo: 'public', pathMatch: 'full' },
  // { path: '**', redirectTo: 'floors', pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(myRoutes, { enableTracing: false })
  ],
  declarations: [],
  exports: [RouterModule]
})
export class RoutingModule { }
