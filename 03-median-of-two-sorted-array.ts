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
        console.log(par,'valor par');
        
        par = Math.floor(par);
        let parPosicion = par ;
        par = +arrayOrdenado[par];
        
        parPlus = +arrayOrdenado[parPosicion + 1];
        resultadoPar = ( par + parPlus) / 2;
        console.log('es par');
        
        return resultadoPar;
        
        
    }else{
        if(arrayOrdenado.length <= 1){
            return +arrayOrdenado[0];
        }
        impar = +arrayOrdenado[arrayOrdenado.length - 1];
        console.log(impar,'valor del impar');
        let imparPosicion = Math.floor(impar/2);
        console.log('es impar');
        console.log(Math.floor(impar/2), 'Esto me daria la posicion del valor de enmedio');
        
        console.log( +arrayOrdenado[imparPosicion],'resultado de todo');
        
        return +arrayOrdenado[imparPosicion];

        // TODO EN impar tiene que regresar el valor de enmedio
        
    }
};

console.log(findMedianSortedArrays([1,2],[3,4,5]));


const numeros = [1,3,0];
// let respuesta = numeros.sort(function(a, b){return a - b});