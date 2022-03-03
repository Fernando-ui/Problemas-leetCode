function findMedianSortedArrays(nums1: number[], nums2: number[]): number {

    let arrCompleto:object[] = [];
    arrCompleto.push(nums1,nums2);

    let arrayOrdenado = arrCompleto.flat() ;
    arrayOrdenado = arrayOrdenado.sort(function(a:any, b:any){return a - b});
    console.log(arrayOrdenado);


    let par:number | null = null;
    let parPlus:number | null = null;
    let resultadoPar:number | null = null;
    let impar:number | null = null;


    if(arrayOrdenado.length %2 === 0){
        
        par = (arrayOrdenado.length - 1) / 2;
        par = Math.floor(par);
        let parPosicion = par ;
        par = +arrayOrdenado[par];
        
        parPlus = +arrayOrdenado[parPosicion + 1];
        resultadoPar = ( par + parPlus) / 2;
        console.log('es par');
        
        return resultadoPar;
        
        
    }else{
        console.log('es impar');
    }
    return 2;
};

console.log(findMedianSortedArrays([1,2],[3,4]));


const numeros = [1,3,0];
// let respuesta = numeros.sort(function(a, b){return a - b});