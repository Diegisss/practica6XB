function codigoJS()
{
    let edad= document.getElementById("x").value;
    let peso= document.getElementById("x").value;
    let sexo= document.getElementById("x").value;
    let estatura= document.getElementById("x").value;
    let nivelEjercicio= document.getElementById("x").value;
    if (sexo=='hombre'){
    MB = 88.362 + (13.397 * peso) + (4.799 * estatura) - (5.677 * edad);
    } else{
        MB = 447.593 + (9.247 * peso) + (3.098 * estatura) - (4.330 * edad);
    }

    }

