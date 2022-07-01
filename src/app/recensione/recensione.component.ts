import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Recensione } from '../_models/recensione';
import { RecensioneService } from '../_services/recensione.service';

@Component({
  selector: 'app-recensione',
  templateUrl: './recensione.component.html',
  styleUrls: ['./recensione.component.scss']
})
export class RecensioneComponent implements OnInit {
  isLoadingData = true;
  recensioni: Recensione[]
  constructor(
    private recensioneService : RecensioneService,
    private ref : ChangeDetectorRef,
    private router: Router) { }
   


  ngOnInit(): void {
     this.getAllRecensioni()
    
  }

   getAllRecensioni(){
     this.recensioneService.getAllRecensioni()
     .subscribe(recensione => {
      
        this.recensioni = recensione;
       this.isLoadingData = false;
       this.ref.detectChanges();
     })
     
    
   }
   updateRecensione(id:any) {
    this.router.navigate(['/recensione/modifica/'+id]);
  }

  deleteRecensione(id:any) {

    this.recensioneService.deleteRecensione(id)
    .subscribe(data => {  
      this.getAllRecensioni()
      this.ref.detectChanges();
    })
  }
  
  
}
  




