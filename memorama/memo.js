

let targetasDestapadas = 0;
let targeta1= null;
let targeta2= null;
let primerResultado = null;
let segundoResultado = null;
let movimientos = 0;
let aciertos = 0;
let temporizaador = false;
let timer =100;
let tiempoRegresivo = null;
let timerInicial = timer;

let mostrarMovimientos =document.getElementById('movimientos');
let mostrarAciertos= document.getElementById('aciertos');
let mostrarTiempo = document.getElementById("tiempo")


   let numeros= [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,] ;//generador de numeros aleatorios

 numeros= numeros.sort(()=>{return Math.random()-0.5});
    //generando numeros positivos y negativos
function contarTiempo(){
  tiempoRegresivo = setInterval(()=>{
timer--;
mostrarTiempo.innerHTML =`Tiempo:${timer}segundos`;
if (timer ==0){
clearInterval(tiempoRegresivo);
bloquearTargetas()
}
  },1000);
}


function bloquearTargetas(){
  for(let i = 0; i<=15;i++){
    let targetaBloqueada = document.getElementById(i);
    targetaBloqueada.innerHTML = numeros[i];
    targetaBloqueada.disabled=true;
  }
}





     function destapar(id){  
      if(temporizaador == false){
        contarTiempo();
        temporizaador=true;
      }

       targetasDestapadas++;
      
     
       if (targetasDestapadas === 1){
       targeta1 = document.getElementById(id);//seleccione dentro del html el documento que tenga el id 
       primerResultado = numeros[id] //los 16 botones se asociarar a los 16 numeros
       targeta1.innerHTML = primerResultado ; 

       targeta1.disabled = true; //desabilitar la targeta
       
                         
     } else if(targetasDestapadas ===2){
       targeta2 = document.getElementById(id);
       segundoResultado = numeros[id];               //relaciona con los numeros
       targeta2.innerHTML = segundoResultado;
        
       targeta2.disabled = true   ;            //desabilitacion boton2
       movimientos++  ;                               //aumenta movimientos de 2 en 2 
       mostrarMovimientos.innerHTML =`Movimientos: ${movimientos}`  //muestra movimientos 

        if(primerResultado===segundoResultado){
           targetasDestapadas = 0 ;       //cuando los 2 valores sean iguales  regresa a 0
           aciertos ++;
           mostrarAciertos.innerHTML=`aciertos: ${aciertos}`

           if( aciertos===8){
              clearInterval(tiempoRegresivo);
               mostrarAciertos.innerHTML=`aciertos: ${aciertos}` 
               mostrarTiempo.innerHTML=`fantastico Solo demoraste ${timerInicial - timer}segundos`
               mostrarMovimientos.innerHTML=`Movimientos: ${movimientos}`
           }

        }else{
              setTimeout(()=>{  
               targeta1.innerHTML=' ';
               targeta2.innerHTML=' ';
               targeta1.disabled = false;
               targeta2.disabled = false;
               targetasDestapadas = 0;
         }, 1000)
       }       
    }  
}
