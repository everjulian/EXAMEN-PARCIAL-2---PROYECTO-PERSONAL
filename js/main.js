function login(){
    let user, pass;
    user = document.getElementById("usuario").value;
    pass = document.getElementById("password").value;

    if (user == "admin" && pass == "1234") {
        window.location = "inicio.html";
    
    }
    else if ( user = user){
        alert(" el usuario no es correcto")
    }
    
    else {
        alert("Ingrese las credenciales correctamente")
    }
}		

