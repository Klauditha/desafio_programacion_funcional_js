import rxjs from "https://unpkg.com/rxjs/bundles/rxjs.umd.min.js";


/*EScribir un cronometro utilizando RxJS*/
/* https://www.learnrxjs.io*/

const resultado = document.getElementById('resultado');

const { timer } = rxjs;
const { map } = rxjs.operators;

timer(1000,1000).pipe(map(()=>{
    const ahora = new Date();
    return ahora.toLocaleString();
})).subscribe(valor => {
    resultado.innerText = valor;
})