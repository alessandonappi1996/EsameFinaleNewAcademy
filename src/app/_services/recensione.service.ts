import { Router } from "@angular/router";
import { HttpClient} from '@angular/common/http';
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { Recensione } from "../_models/recensione";

@Injectable({ providedIn: 'root' })
export class RecensioneService {


  constructor(
    private router: Router,
    private http: HttpClient
  ) {  }

  getAllRecensioni() {
    return this.http.get<any>(`${environment.apiUrl}/recensione/listaRecensioni`)
  }

  createRecensione(recensione: Recensione) {
    return this.http.post(`${environment.apiUrl}/recensione/creaRecensione`, recensione)
  }

  deleteRecensione(id:any) {
    return this.http.delete<any>(`${environment.apiUrl}/recensione/eliminaRecensione/${id}`)
  }

  updateRecensione(recensione:Recensione) {
    return this.http.put(`${environment.apiUrl}/recensione/modificaRecensione`, recensione)
    }
    getRecensioneById(id:any){
        return this.http.get<any>(`${environment.apiUrl}/recensione/findRecensione/${id}`)
      }

}