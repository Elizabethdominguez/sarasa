/*
Se necesita llevar la gestión de una veterinaria. Para ello se podrán registrar los datos de cada mascota mientras el usuario quiera.
De cada mascota se solicita:
-nombre (entre 3 y 8 caracteres)
-tipo (“mamifero”, “ave”, “reptil”)
-sangre ( "fria", "calida")
Si es de tipo reptil solo puede tener sangre fria
-edad ( mayor a cero)
-sexo( “m” de macho o “h” de hembra )
Informar:
a- Promedio de edad de los reptiles
b- tipo y sexo de la mascota mas joven
c- Del total de mascotas que porcentaje son aves
d- De que tipo de mascota hay mas cantidad

*/
function mostrar() {
  let nombre;
  let tipo;
  let sangre;
  let edad;
  let sexo;
  let seguir
  ////punto a--->
  let promEdadReptiles = 0;
  let acumEdadReptiles = 0;
  let contReptiles= 0;
/////punto b--->
let edadMascotamasJoven;
let sexoMascotamasJoven;
let tipoMascotamasJoven;
let flagMascota= 1
//// punto c--->
let porcTotalMascotas = 0;
let contMascotasAves = 0;
let contMascotas= 0;
////punto d ----> 
let contMascotas= 0;
let masCantidad;
let contMasMascotas;

do{
  nombre= prompt("Ingrese un nombre");
  while (!(nombre.length >=3 && nombre.length <= 8) ){
alert = nombre = prompt("Nombre fuera de rango. Reingrese nombre: ");
  }
  tipo=prompt("Ingrese tipo (Mamifero/ Ave /Reptil): ");

  while(!(tipo =="Mamifero" || tipo == "Ave" || tipo == "Reptil" ) ){
    alert =  tipo=prompt("Error. Reingrese tipo (Mamifero/ Ave /Reptil): ");
  }

  while(!(Sangre =="Fria" || Sangre == "Calida"  )){
    Sangre=prompt("Error. Reingrese tipo de sangre  (Fria/Calida): ");
    if(tipoREptil =="Sangre fria"){
      tipoREptil ="Sangre fria";
    }

    edad = parseInt(prompt("Ingrese  edad: "));
    while(!(edad >0)){
        edad= parseInt(prompt("Edad invalia Reingrese edad: "));
    }
    while(!(sexo =="m" || sexo == "h" ) ){
      sexo=prompt("Error. Reingrese sexo (m/h): ");
  



switch(edad){
  case "Reptiles":
      Reptiles++;
      acumReptiles+= edad;
 contReptiles;
}
if(sexo== "m"){
  if(flagMascotas || edad > edadMascotasMasjoven){
      edadMascotaMasjoven= edad;
      tipoMascotamasJoven= nombre;
      sexoMascotasMasJoven = vacuna;
      flagMascota=0;
  }
    /////
seguir = prompt("Quiere ingresar otra mascota?: ");
}while ( seguir=="m")
  
    }
