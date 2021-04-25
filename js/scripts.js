(function ($) {
  $(function () {
    $(".sidenav").sidenav();
    $(".parallax").parallax();
    document.getElementById("dateSmall").innerHTML =
      "MBM Soluciones Contables - " + new Date().getFullYear();
    document.getElementById("dateLarge").innerHTML =
      "MBM Soluciones Contables - " + new Date().getFullYear();
  });
})(jQuery);

$(document).ready(function () {
  $(".collapsible").collapsible();
});

$(document).ready(function () {
  $(".modal").modal();
});

function inviteGenerator() {
  let url = "https://github.com/FIng-UdelaR/Herramientas";
  let body = `<ul>
        <li><b>Descripción: </b>La herramienta "Generador de invitaciones" 
        para FIng-UdelaR permite invitar usuarios de Github a unirse a la 
        organización FIng-UdelaR, pudiendo incluso seleccionar un listado 
        de equipos donde agregar al nuevo miembro. <br>Verifica, además, 
        la existencia de la organización, la existencia del usuario y la 
        pertenencia del usuario en la organización (o la existencia de una 
          invitación previa pendiente de aceptación). <br> El invitado 
          recibirá un correo electrónico con un enlace para aceptar la 
          invitación. Adicionalmente, la herramienta permite copiar el 
          enlace de invitación a la organización por si el invitado no 
          tiene acceso al email.</li>
        <li><b>Versión actual: </b>1.0</li>
        <li><b>Edición: </b>portable</li>
        <li><b>Sistemas operativos: </b>Windows</li>
        <li><b>Requerimientos: </b>requiere conexión a Internet</li>
    </ul><hr>
<a href="${url}" target="_blank">Acceder a la herramienta</a>`;

  expandImage(
    "Generador de invitaciones",
    "resources/invitation-tool.png",
    body
  );
}

function renameRepository() {
  let url = "https://github.com/FIng-UdelaR/Herramientas";
  let body = `<p>Para renombrar un repositorio debes dirigirte a la pestaña
  "Settings" del repositorio y escribir un nuevo nombre, tal y como muestra 
  esta imagen.</p>`;

  expandImage("Renombrar repositorio", "resources/rename-repository.png", body);
}

function shareRepositoryWithOrg() {
  let url = "https://github.com/FIng-UdelaR/Herramientas";
  let body = `<p>Para compartir un repositorio con FIng-UdelaR, debes hacer 
  clic en el botón de transferir repositorio, que se encuentra dentro de las
  Settings del mismo. Github desplegará un modal donde deberás escribir 
  "FIng-UdelaR" en el input de nombre de organización, tal y como muestra 
  esta imagen.</p>
  <p>Finalmente, para que Github permita enviarle este repositorio a FIng-UdelaR,
  solicitará que escribas manualmente el nombre del repositorio que estás 
  intantando enviar.</p>
  <p>¡Listo! Ahora el repositorio será compartido con los miembros de 
  FIng-UdelaR</p>`;

  expandImage(
    "Compartir repositorio con FIng-UdelaR",
    "resources/share-repository.png",
    body
  );
}

function expandImage(title, source, body) {
  document.getElementById("imageTitle").innerHTML = title;
  document.getElementById("imageSource").src = source;
  document.getElementById("imageCardBody").innerHTML = body;
  modalImage = document.getElementById("modalImage");
  let instance = M.Modal.getInstance(modalImage);
  instance.open();
}

/* Typing and Deleting Effect */
// List of sentences
var _CONTENT = ["Lit. E", "Monotributos", "Servicios Personales", "SAS"];

// Current sentence being processed
var _PART = 0;

// Character number of the current sentence being processed
var _PART_INDEX = 0;

// Holds the handle returned from setInterval
var _INTERVAL_VAL;

// Element that holds the text
var _ELEMENT = document.querySelector("#text");

// Cursor element
var _CURSOR = document.querySelector("#cursor");

// Implements typing effect
function Type() {
  // Get substring with 1 characater added
  var text = _CONTENT[_PART].substring(0, _PART_INDEX + 1);
  _ELEMENT.innerHTML = text;
  _PART_INDEX++;

  // If full sentence has been displayed then start to delete the sentence after some time
  if (text === _CONTENT[_PART]) {
    // Hide the cursor
    _CURSOR.style.display = "none";

    clearInterval(_INTERVAL_VAL);
    setTimeout(function () {
      _INTERVAL_VAL = setInterval(Delete, 50);
    }, 1000);
  }
}

// Implements deleting effect
function Delete() {
  // Get substring with 1 characater deleted
  var text = _CONTENT[_PART].substring(0, _PART_INDEX - 1);
  _ELEMENT.innerHTML = text;
  _PART_INDEX--;

  // If sentence has been deleted then start to display the next sentence
  if (text === "") {
    clearInterval(_INTERVAL_VAL);

    // If current sentence was last then display the first one, else move to the next
    if (_PART == _CONTENT.length - 1) _PART = 0;
    else _PART++;

    _PART_INDEX = 0;

    // Start to display the next sentence after some time
    setTimeout(function () {
      _CURSOR.style.display = "inline-block";
      _INTERVAL_VAL = setInterval(Type, 100);
    }, 200);
  }
}

// Start the typing effect on load
_INTERVAL_VAL = setInterval(Type, 100);
