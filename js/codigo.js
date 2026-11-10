let sexo = ""; /*esto lo hice para que cuando le demos click a las bolitas, automaticamente
    se guarde el valor en esta variable, un ingenio que se me ocurrio */
function codigoJS() 
{
    let nombre_alumno = "Diego Jaimes Escobar";
    let numero_control = "24090897";
    let nom = document.getElementById('datos');
    let num = document.getElementById('datos1');
    nom.innerHTML= nombre_alumno;
    num.innerHTML= numero_control;


    let MB = 0, caloriasDiariasTotales= 0 ;
    let edad = document.getElementById("edad").value;
    let peso = document.getElementById("peso").value;
    let estatura = document.getElementById("estatura").value;
    let nivelEjercicio = document.getElementById("nivel").value;

    if(edad == "" || peso == "" || estatura == ""){
        alert("NO PUEDES DEJAR VACIOS LOS CAMPOS!!!");
        return;
    }
    
    /*el if-else lo remplace por un ternario, simplemente 
    por estetica, no me gustaba la otra forma */
    MB = (sexo == 'hombre') ? 88.362 + (13.397 * peso) + (4.799 * estatura) - (5.677 * edad):
        447.593 + (9.247 * peso) + (3.098 * estatura) - (4.330 * edad);

    caloriasDiariasTotales = MB * nivelEjercicio;
    
    let mb = document.getElementById('resultado2');
    let ct = document.getElementById('resultado3');
    mb.innerHTML = MB.toFixed(2)
    ct.innerHTML=caloriasDiariasTotales.toFixed(2);

}

