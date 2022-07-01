import { ChangeDetectorRef, Component, OnInit } from '@angular/core';

import { Location } from '@angular/common';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

import { ActivatedRoute, Router } from '@angular/router';

import { RecensioneService } from 'src/app/_services/recensione.service';
import { RecensioneComponent } from '../recensione.component';
import { Recensione } from 'src/app/_models/recensione';
import { ArticoloService } from 'src/app/_services/articolo.service';

@Component({
  selector: 'app-nuovo-recensione',
  templateUrl: './nuovo-recensione.component.html',
  styleUrls: ['./nuovo-recensione.component.scss']
})
export class NuovoRecensioneComponent implements OnInit {
  recensioni: Recensione;
  form: FormGroup;
  loading = false;
  submitted = false;
  isLoadingData = true;

  articoli: any = [];

  constructor(private location: Location,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private recensioneService: RecensioneService,
    private ref: ChangeDetectorRef,
    private articoliService: ArticoloService) { }

  ngOnInit(): void {

    this.getAllArticoli()
    
    this.form = this.formBuilder.group({
      id: ['0'],
      testo: [''],
      idarticolo: ([''][this.articoli]),
   
      
    })


  }

  getAllArticoli(){
    this.articoliService.getAllArticoli()
    .subscribe(
        data => {
          this.articoli= data
      })
   }


  onSubmit() {

    this.submitted = true;

    if (this.form.invalid) {
      return;
    }

    this.loading = true;

    this.recensioneService.createRecensione(this.form.value)
       .subscribe()
     
        
          this.router.navigate(['/recensione'], { relativeTo: this.route });
   
         
      
      }
        goBack(){
          this.router.navigate(['/recensione'])
        }
  }

