const nombreh = "Nombre:"
const telh = "Telefono:"
const espacio = " "
const guardarContact = () => {
  let contactos = JSON.parse(localStorage.getItem("contactosArray"));
  let name = document.getElementById("nombre").value;
  let tel = document.getElementById("telefono").value;
  console.log(contactos);
  let id = document.getElementById("contacto_id").value;
  /*Se crea un contacto*/
  if (id === "") {
    console.log(id)
    if (!contactos) {
      contactos = [];
      id = 1;
    } else {
      id = contactos.length + 1;
    }
    let contacto = {
      id: id,
      nombre: name,
      telefono: tel,
    };
    contactos.push(contacto);
    localStorage.setItem("contactosArray", JSON.stringify(contactos));

    let newButton = document.createElement('button');
    newButton.innerHTML = nombreh + name + espacio + telh + tel;
    newButton.setAttribute("class", "col-3");
    newButton.setAttribute("onclick", `editContact(${id})`);
    newButton.setAttribute("id", 'button_' + id);
    document.getElementById("name").appendChild(newButton);
  } else {
    let contacto = {
      id: id,
      nombre: name,
      telefono: tel,
    };
    contactos[id - 1] = contacto;
    localStorage.setItem("contactosArray", JSON.stringify(contactos));
    document.getElementById("button_" + id).innerHTML = nombreh + name + espacio + telh + tel;
    document.getElementById("contacto_id").value = "";
  }
};

const editContact = (id) => {
  document.getElementById("contacto_id").value = id;
};

const mostrarContactos = () => {
  let contactos = JSON.parse(localStorage.getItem("contactosArray"));
  if (contactos) {
    contactos.map((contacto) => {
      let newButton = document.createElement('button');
      newButton.innerHTML = nombreh + contacto.nombre + espacio + telh + contacto.telefono;
      newButton.setAttribute("class", "col-3");
      newButton.setAttribute("onclick", `editContact(${contacto.id})`);
      document.getElementById("name").appendChild(newButton);
      newButton.setAttribute("id", 'button_' + contacto.id);
    })
  }
}
