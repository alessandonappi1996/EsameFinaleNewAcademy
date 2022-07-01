import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NavbarComponent } from './navbar/navbar.component';

const routes: Routes = [
    
    
    { path: '',
    component: NavbarComponent,
    

    children: [
      {
        path: 'articolo',
        loadChildren: () =>
          import('./articolo/articolo.module').then((m) => m.ArticoloModule)
      },

      {
        path: 'recensione',
        loadChildren: () =>
          import('./recensione/recensione.module').then((m) => m.RecensioneModule)
      },
    ]
},
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }