
function nivelEnergiaSables(){
let= sumatoria=0;
let = longitud = [1,-3,-5,-6,3,-7,-91,-3,-5,6,3,-7,-9,5,8,123];
for (var i=0; i< longitud.length; i++)
{
    if (longitud[i]<=0){
        sumatoria++;
    }
}
return(`luego de sumar la totalidad de sables ${longitud.length} la cantidad de sables con energia descargada es de ${sumatoria}`);
}
console.log(nivelEnergiaSables())