import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ThreeComponent } from './three.component';

const routes: Routes = [
  {
    path: '',
    component: ThreeComponent,
    data: {
      title: 'Three',
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ThreeRoutingModule { }
