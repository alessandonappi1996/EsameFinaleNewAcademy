import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Articolo } from '../_models/articolo';
import { ArticoloService } from '../_services/articolo.service';

@Component({
  selector: 'app-articolo',
  templateUrl: './articolo.component.html',
  styleUrls: ['./articolo.component.scss']
})
export class ArticoloComponent implements OnInit {
  isLoadingData = true;
  articoli: Articolo[]
  constructor(
    private articoloService : ArticoloService,
    private ref : ChangeDetectorRef,
    private router: Router) { }
   


  ngOnInit(): void {
     this.getAllArticoli()
    
  }

   getAllArticoli(){
     this.articoloService.getAllArticoli()
     .subscribe(articolo => {
      
        this.articoli = articolo;
       this.isLoadingData = false;
       this.ref.detectChanges();
     })
     
    
   }
   updateArticolo(id:any) {
    this.router.navigate(['/articolo/modifica/'+id]);
  }

  deleteArticolo(id:any) {

    this.articoloService.deleteArticolo(id)
    .subscribe(data => {  
      this.getAllArticoli()
      this.ref.detectChanges();
    })
  }
  
  
}
  





  
