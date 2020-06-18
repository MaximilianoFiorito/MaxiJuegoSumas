const guardarContact = () => {
  var contactos = JSON.parse(localStorage.getItem("contactosArray"));
  var name = document.getElementById("nombre").value;
  var tel = document.getElementById("telefono").value;
  console.log(contactos);
  let id = 0;
  if (!contactos) {
    contactos = [];
    id = 1;
  } else {         
    id = contactos.length + 1;
  }
  var contacto = {
    id: id,
    nombre: name,
    telefono: tel,
  };
  contactos.push(contacto);
  localStorage.setItem("contactosArray", JSON.stringify(contactos));
  
  let newButton = document.createElement('button');
  newButton.innerHTML = contacto.nombre;
  newButton.setAttribute("onclick",`editContact(${id})`);
  document.getElementById("name").appendChild(newButton);
};

const verContact = () => {
  document.getElementById("test").innerHTML = name;
  document.getElementById("test2").innerHTML = tel;
};

const editContact = (id) => {
    
    let contactos = JSON.parse(localStorage.getItem("contactosArray"));
    let contacto = contactos[id-1];
    contacto.nombre = "isatest";
    contacto.telefono = 1234;
    contactos[id-1] = contacto; 
    localStorage.setItem("contactosArray", JSON.stringify(contactos));
};
