import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TwoComponent } from './two.component';

const routes: Routes = [
  {
    path: '',
    component: TwoComponent,
    data: {
      title: 'Two',
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TwoRoutingModule { }
