const TICKET = 200;
const ESTUDIANTE = 0.8;
const TRAINEE = 0.5;
const JUNIOR = 0.3;

const nombre = document.querySelector("#nombre");
const apellido = document.getElementById("apellido");
const email = document.querySelector("#mail");
const cantidad = document.querySelector("#cantidadTickets");
const categoria = document.querySelector("#categoriaSelect");
const btnResumen = document.querySelector("#btnResumen");
const btnClear = document.querySelector("#btnBorrar");
let totalPago = document.querySelector("#totalPago");

btnClear.addEventListener("click", limpiarCampos); 
btnResumen.addEventListener("click",calcularMonto);

function limpiarCampos() {
    nombre.value = "";
    apellido.value = "";
    email.value = "";
    cantidad.value = "";
    categoria.value = "";
    totalPago.textContent = "";
  }

function calcularMonto() {
  totalPago.textContent =
    TICKET - TICKET * calcularDescuento() * cantidad.value;
}

function calcularDescuento() {
  switch (categoria.value) {
    case "0":
      return 0;
    case "1":
      return ESTUDIANTE;
      case "2":
        return TRAINEE;
      case "3":
        return JUNIOR;
  
    default:
      break;
  }
}
function validarCampos(){
    nom = document.getElementsByName(nombre).value;

    if( nom =! "" ) 
    {
        alert('[ERROR] Debe ingresar su nombre')
        return false;}
    else
        calcularMonto();
    }
   
    
    
        

   
   


