import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DynamicFormArrayComponent} from './dynamic-form-array/dynamic-form-array.component';

const routes: Routes = [
  {path: '', redirectTo: '/dynamic-form-array', pathMatch: 'full'},
  {path: 'dynamic-form-array', component: DynamicFormArrayComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
