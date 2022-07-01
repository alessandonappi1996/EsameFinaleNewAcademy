import { ChangeDetectorRef, Component, OnInit } from '@angular/core';

import { Location } from '@angular/common';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

import { ActivatedRoute, Router } from '@angular/router';

import { ArticoloService } from 'src/app/_services/articolo.service';
import { ArticoloComponent } from '../articolo.component';
import { Articolo } from 'src/app/_models/articolo';
import { RecensioneService } from 'src/app/_services/recensione.service';

@Component({
  selector: 'app-nuovo-articolo',
  templateUrl: './nuovo-articolo.component.html',
  styleUrls: ['./nuovo-articolo.component.scss']
})
export class NuovoArticoloComponent implements OnInit {
  articoli: Articolo;
  form: FormGroup;
  loading = false;
  submitted = false;
  isLoadingData = true;
  recensioni: any = [];



  constructor(private location: Location,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private articoloService: ArticoloService,
    private ref: ChangeDetectorRef,
    private recensioneService: RecensioneService) { }
    
  ngOnInit(): void {
    this.getAllRecensioni();

    this.form = this.formBuilder.group({
      id: ['0'],
      nome: [''],
      prezzo: [''],
      recensioni: ([''][this.recensioni])
      
    })


  }
  getAllRecensioni(){
    this.recensioneService.getAllRecensioni()
    .subscribe(
        data => {
          this.recensioni= data
      })
   }
  onSubmit() {

    this.submitted = true;

    if (this.form.invalid) {
      return;
    }

    this.loading = true;

    this.articoloService.createArticolo(this.form.value)
       .subscribe()
     
        
          this.router.navigate(['/articolo'], { relativeTo: this.route });
   
         
      
      }
        goBack(){
          this.router.navigate(['/articolo'])
        }
  }
