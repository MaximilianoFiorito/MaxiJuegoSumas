let nombre, telefono;

guardarContact = () => {
    nombre = document.getElementById("nombre").value;
    telefono = document.getElementById("telefono").value;
    localStorage.name = nombre; 
    localStorage.telef = telefono;
    document.getElementById("name").innerHTML = localStorage.name;
    document.getElementById("celu").innerHTML = localStorage.telef;
}

verContact = () => {
    document.getElementById("test").innerHTML = localStorage.name;
    document.getElementById("test2").innerHTML = localStorage.telef;
}

