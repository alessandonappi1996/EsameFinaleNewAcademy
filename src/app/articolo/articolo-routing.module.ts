import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticoloComponent } from './articolo.component';
import { NuovoArticoloComponent } from './nuovo-articolo/nuovo-articolo.component';
import { UpdateArticoloComponent } from './update-articolo/update-articolo.component';

const routes: Routes = [ {
  path:'',
  data:{
    title: 'Articolo'
  },
  
  children: [
    {
      path:'',
      component: ArticoloComponent,
      data: {
        title: '',
      } 
    },
    {
      path:'nuovoArticolo',
      component: NuovoArticoloComponent,
      data: {
        title: '',
      } 
    },
    {
      path:'modifica',
      component: UpdateArticoloComponent,
      data: {
        title: '',
      } 
    },

   
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArticoloRoutingModule { }