"use strict";

var nombreh = "Nombre:";
var telh = "Telefono:";
var espacio = " ";

var guardarContact = function guardarContact() {
  var contactos = JSON.parse(localStorage.getItem("contactosArray"));
  var name = document.getElementById("nombre").value;
  var tel = document.getElementById("telefono").value;
  console.log(contactos);
  var id = document.getElementById("contacto_id").value;
  /*Se crea un contacto*/

  if (id === "") {
    console.log(id);

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
    newButton.innerHTML = nombreh + name + espacio + telh + tel;
    newButton.setAttribute("class", "col-3");
    newButton.setAttribute("onclick", "editContact(".concat(id, ")"));
    newButton.setAttribute("id", 'button_' + id);
    document.getElementById("name").appendChild(newButton);
  } else {
    var _contacto = {
      id: id,
      nombre: name,
      telefono: tel
    };
    contactos[id - 1] = _contacto;
    localStorage.setItem("contactosArray", JSON.stringify(contactos));
    document.getElementById("button_" + id).innerHTML = nombreh + name + espacio + telh + tel;
    document.getElementById("contacto_id").value = "";
  }
};

var editContact = function editContact(id) {
  document.getElementById("contacto_id").value = id;
};

var mostrarContactos = function mostrarContactos() {
  var contactos = JSON.parse(localStorage.getItem("contactosArray"));

  if (contactos) {
    contactos.map(function (contacto) {
      var newButton = document.createElement('button');
      newButton.innerHTML = nombreh + contacto.nombre + espacio + telh + contacto.telefono;
      newButton.setAttribute("class", "col-3");
      newButton.setAttribute("onclick", "editContact(".concat(contacto.id, ")"));
      document.getElementById("name").appendChild(newButton);
      newButton.setAttribute("id", 'button_' + contacto.id);
    });
  }
};