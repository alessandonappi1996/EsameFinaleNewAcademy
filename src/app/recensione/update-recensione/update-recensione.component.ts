import { ChangeDetectorRef, Component, OnInit } from '@angular/core';

import { Location } from '@angular/common';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

import { ActivatedRoute, Router } from '@angular/router';

import { RecensioneService } from 'src/app/_services/recensione.service';
import { RecensioneComponent } from '../recensione.component';
import { Recensione } from 'src/app/_models/recensione';
import { ArticoloService } from 'src/app/_services/articolo.service';

@Component({
  selector: 'app-update-recensione',
  templateUrl: './update-recensione.component.html',
  styleUrls: ['./update-recensione.component.scss']
})
export class UpdateRecensioneComponent implements OnInit {
  recensioni: Recensione;
  form: FormGroup;
  loading = false;
  submitted = false;
  isLoadingData = true;

  id:any | null | undefined;
  articoli: any = [];
  articolo: any;

  constructor(private location: Location,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private recensioneService: RecensioneService,
    private ref: ChangeDetectorRef,
    private articoliService: ArticoloService) { }

  ngOnInit(): void {

    this.id = this.route.snapshot.paramMap.get('id');

        this.getAllArticoli();

        this.getRecensioneById(this.id);

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
 getRecensioneById(id: any){
         this.recensioneService.getRecensioneById(id)
         .subscribe(
           data => {    
              
            this.articolo= data.articolo
           this.form.patchValue(data)
           
           this.ref.detectChanges();
           this.isLoadingData = false;
         }
         )
     
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

