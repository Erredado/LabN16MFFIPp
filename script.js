function ValidarDatos(){
    let nombreTmp = document.getElementById("nombre").Value;
    let mailTmp = document.getElementById("email").value;
    let imagenTmp = document.getElementById("imagen").value;

    if(nombreTmp == NULL || mailTmp == NULL || imagenTmp == NULL)
    {
        return false;
    }else{
        return true;
    }
}

function mostrarImagen(event){ 
    let imagen=document.getElementById('ver-imagen'); 
    imagen.src=URL.createObjectURL(event.target.files[0]); 
} 