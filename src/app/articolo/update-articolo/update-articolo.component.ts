import { ChangeDetectorRef, Component, OnInit } from '@angular/core';

import { Location } from '@angular/common';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

import { ActivatedRoute, Router } from '@angular/router';

import { RecensioneService } from 'src/app/_services/recensione.service';
import { ArticoloComponent } from '../articolo.component';
import { Recensione } from 'src/app/_models/recensione';
import { ArticoloService } from 'src/app/_services/articolo.service';
import { Articolo } from 'src/app/_models/articolo';

@Component({
  selector: 'app-update-articolo',
  templateUrl: './update-articolo.component.html',
  styleUrls: ['./update-articolo.component.scss']
})
export class UpdateArticoloComponent implements OnInit {
  articoli: Articolo;
  form: FormGroup;
  loading = false;
  submitted = false;
  isLoadingData = true;

  id:any | null | undefined;
  recensioni: any = [];
  recensione: any;

  constructor(private location: Location,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private recensioneService: RecensioneService,
    private ref: ChangeDetectorRef,
    private articoliService: ArticoloService) { }

  ngOnInit(): void {

    this.id = this.route.snapshot.paramMap.get('id');

        this.getAllRecensioni();

        this.getArticoloById(this.id);

    this.form = this.formBuilder.group({
      id: ['0'],
      nome: [''],
      prezzo: [''],
      recensioni: ([''][this.recensioni]),
   
      
    })


  }

  getAllRecensioni(){
    this.recensioneService.getAllRecensioni()
    .subscribe(
        data => {
          this.recensioni= data
      })
   }
 getArticoloById(id: any){
         this.articoliService.getArticoloById(id)
         .subscribe(
           data => {    
              
            this.recensioni= data.recensione
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

    this.articoliService.createArticolo(this.form.value)
       .subscribe()
     
        
          this.router.navigate(['/articolo'], { relativeTo: this.route });
   
         
      
      }
        goBack(){
          this.router.navigate(['/articolo'])
        }
  }

