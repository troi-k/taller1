let  calcularDistancia=(coordenadax1,coordenadax2,coordenaday1,coordenaday2)=>
    (`la distancia del planeta yavin4 a naboo es de : ${Math.sqrt(Math.pow(coordenadax2-coordenadax1,2)+Math.pow(coordenaday2-coordenaday1,2))} UA`)
console.log(calcularDistancia(0,50,0,-70));
let distancia=calcularDistancia(0,20,0,30);// almacenar funcion en variable
