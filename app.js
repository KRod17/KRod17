function SetApp() {
    // OBTENER LOS VALORES DEL FORMULARIO
    var nombre = document.getElementById('nombre').value;
    var email = document.getElementById('email').value;
    var asunto = document.getElementById('asunto').value;
    var mensaje = document.getElementById('mensaje').value;
    // CONDICIONAL PARA VALIDAR QUE HAYAN DATOS EN EL FORMULARIO
    if (nombre && email && asunto && mensaje) {
        // GUARDAR LOS DATOS EN EL LOCAL STORAGE
        localStorage.setItem("lsName", nombre);
        localStorage.setItem("lsEmail", email);
        localStorage.setItem("lsAsunto", asunto);
        localStorage.setItem("lsMensaje", mensaje);
    }
}

function GetApp() {
    // OBTENER LOS DATOS GUARDADOS DEL LOCAL STORAGE
    var nombre = localStorage.getItem("lsName");
    var email = localStorage.getItem("lsEmail");
    var asunto = localStorage.getItem("lsAsunto");
    var mensaje = localStorage.getItem("lsMensaje");
    // MOSTRAR LOS DATOS QUE ESTABAN EN EL LOCAL STORAGE POR CONSOLA
    console.log(nombre);
    console.log(email);
    console.log(asunto);
    console.log(mensaje);
}
