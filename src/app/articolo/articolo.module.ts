import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArticoloRoutingModule } from './articolo-routing.module';
import { ArticoloComponent } from './articolo.component';
import { TableModule } from 'primeng/table';
import { DropdownModule } from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { NuovoArticoloComponent } from './nuovo-articolo/nuovo-articolo.component';
import { UpdateArticoloComponent } from './update-articolo/update-articolo.component';


@NgModule({
  declarations: [ArticoloComponent,NuovoArticoloComponent,UpdateArticoloComponent],
  imports: [
    CommonModule,
    ArticoloRoutingModule,
    TableModule,
    DropdownModule,
    ButtonModule,
    FormsModule,
    ReactiveFormsModule,
    InputTextModule
  ]
})
export class ArticoloModule { }
