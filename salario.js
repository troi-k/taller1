function calcularSalario(licensias){

    const salario= 35000;
    let comicion = 15000;
    let comisiones = licensias  * (comicion) 
    descomicion=comisiones * 0.05
    return(`el salario total del vendedor es :${salario+comisiones-descomicion }`)

}

console.log(calcularSalario(2));


