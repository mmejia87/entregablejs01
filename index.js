// Estacion del año 

let mes = 7;


switch( mes ){
    case 1: case 2: case 12:
        estacion = 'INVIERNO';
        break;
    case 3: case 4: case 5:
        estacion = 'PRIMAVERA';
        break;
    case 6: case 7: case 8:
        estacion = 'VERANO';
        break;
    case 9: case 10: case 11:
        estacion = 'OTOÑO';
        break;
    default:
        estacion ='VALOR INCORRECTO';
}
console.log(estacion);

// Saludo del dia con formato de Hrs.

let horaDia = 15;
let mensaje;

if (horaDia >= 6 && horaDia <= 11){
    mensaje = 'Buenos dias';
}
else if (horaDia >=12 && horaDia <= 18){
    mensaje = 'Buenas Tardes';   
}
else if (horaDia >= 19 && horaDia <= 24){
    mensaje = 'Buenas Noches';
}
else if (horaDia >= 0 && horaDia < 6){
    mensaje = 'Dormido!!!!';
}
console.log(mensaje);