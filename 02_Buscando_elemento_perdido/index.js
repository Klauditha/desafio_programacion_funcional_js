//import rxjs from "https://unpkg.com/rxjs/bundles/rxjs.umd.min.js";
import { rxjs } from 'rxjs';

const elemento = "Elemento9";

const { EMPTY , from, Subject, of} = rxjs;
const {expand, takeWhile } = rxjs.operators;

const fuentes = of(document.body);

fuentes.pipe(expand(nodo => {
    if(nodo.innerHTML === elemento || nodo.innerText === elemento){
        return of(true);
    }
    if(!nodo || !nodo.children || nodo.children.length === 0){
        return EMPTY;
    }

    const arr = [];
    for(const hijo of nodo.children){
        arr.push(hijo);

    }
    return from(arr);
}))