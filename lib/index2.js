"use strict";

var contactos = JSON.parse(localStorage.getItem("contactosArray"));
var name = document.getElementById("nombre");
var tel = document.getElementById("telefono");

guardarContact = function guardarContact() {
  if (contactos) {
    contactos = [];
    var contacto = {
      nombre: name,
      telefono: tel
    };
    contactos.push(contacto);
    localStorage.setItem("contactosArray", JSON.stringify(contactos));
    document.getElementById("name").innerHTML = nombre;
  }
};

verContact = function verContact() {
  document.getElementById("test").innerHTML = name;
  document.getElementById("test2").innerHTML = tel;
};