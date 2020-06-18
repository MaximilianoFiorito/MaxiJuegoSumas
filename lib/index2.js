"use strict";

var guardarContact = function guardarContact() {
  var contactos = JSON.parse(localStorage.getItem("contactosArray"));
  var name = document.getElementById("nombre").value;
  var tel = document.getElementById("telefono").value;
  console.log(contactos);
  var id = 0;

  if (!contactos) {
    contactos = [];
    id = 1;
  } else {
    id = contactos.length + 1;
  }

  var contacto = {
    id: id,
    nombre: name,
    telefono: tel
  };
  contactos.push(contacto);
  localStorage.setItem("contactosArray", JSON.stringify(contactos));
  var newButton = document.createElement('button');
  newButton.innerHTML = contacto.nombre;
  newButton.setAttribute("onclick", "editContact(".concat(id, ")"));
  document.getElementById("name").appendChild(newButton);
};

var verContact = function verContact() {
  document.getElementById("test").innerHTML = name;
  document.getElementById("test2").innerHTML = tel;
};

var editContact = function editContact(id) {
  var contactos = JSON.parse(localStorage.getItem("contactosArray"));
  var contacto = contactos[id - 1];
  contacto.nombre = "isatest";
  contactos[id - 1] = contacto;
  localStorage.setItem("contactosArray", JSON.stringify(contactos));
};