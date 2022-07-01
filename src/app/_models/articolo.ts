import { Recensione } from "./recensione";

export class Articolo{

    id: number;
    nome: String;
    prezzo: number;
    recensioni: Recensione[];
}