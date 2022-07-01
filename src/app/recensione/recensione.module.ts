import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecensioneRoutingModule } from './recensione-routing.module';
import { RecensioneComponent } from './recensione.component';
import { DropdownModule } from 'primeng/dropdown';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { NuovoRecensioneComponent } from './nuovo-recensione/nuovo-recensione.component';
import { UpdateRecensioneComponent } from './update-recensione/update-recensione.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';


@NgModule({
  declarations: [RecensioneComponent,NuovoRecensioneComponent,UpdateRecensioneComponent],
  imports: [
    CommonModule,
    RecensioneRoutingModule,
    TableModule,
    DropdownModule,
    ButtonModule,
    FormsModule,
    ReactiveFormsModule,
    InputTextModule
  ]
})
export class RecensioneModule { }
