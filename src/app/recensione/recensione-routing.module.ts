import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NuovoRecensioneComponent } from './nuovo-recensione/nuovo-recensione.component';
import { RecensioneComponent } from './recensione.component';
import { UpdateRecensioneComponent } from './update-recensione/update-recensione.component';

const routes: Routes = [ {
  path:'',
  data:{
    title: 'Recensione'
  },
  
  children: [
    {
      path:'',
      component: RecensioneComponent,
      data: {
        title: '',
      } 
    },
    {
      path:'nuovoRecensione',
      component: NuovoRecensioneComponent,
      data: {
        title: '',
      } 
    },
    {
      path:'modifica',
      component: UpdateRecensioneComponent,
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
export class RecensioneRoutingModule { }
