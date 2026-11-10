let sexo = ""; /*esto lo hice para que cuando le demos click a las bolitas, automaticamente
    se guarde el valor en esta variable, un ingenio que se me ocurrio */
function codigoJS() 
{
    let MB = 0;
    let edad = document.getElementById("edad").value;
    let peso = document.getElementById("peso").value;
    let estatura = document.getElementById("estatura").value;
    let nivelEjercicio = document.getElementById("nivel").value;
    if (sexo == 'hombre') {
        MB = 88.362 + (13.397 * peso) + (4.799 * estatura) - (5.677 * edad);
    }
    else {
        MB = 447.593 + (9.247 * peso) + (3.098 * estatura) - (4.330 * edad);
    }

    alert(MB.toFixed(2));

}

