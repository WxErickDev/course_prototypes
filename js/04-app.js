// Constructor
function Cliente(nombre, saldo) {
   this.nombre = nombre;
   this.saldo = saldo;
}

// Funcion para el tipo de cliente
Cliente.prototype.tipoCliente = function () {
   let tipo;

   if (this.saldo > 10000) {
      tipo = 'Gold';
   } else if (this.saldo > 5000) {
      tipo = 'Platinum';
   } else {
      tipo = 'Normal';
   }

   // Esta funcion me retorna el tipo
   return tipo;
};

// Funcion para mostra rel nombre, saldo y el tipo de cliente
Cliente.prototype.nombreClienteSaldo = function () {
   return `Nombre: ${this.nombre}, Saldo: ${this.saldo}, Tipo Cliente: ${this.tipoCliente()}`;
};

// Funcion para hacer un retiro del saldo actual
Cliente.prototype.retiraSaldo = function (retira) {
   this.saldo -= retira;
};

// Constructor Persona
function Persona(nombre, saldo, telefono) {
   // Heredando del constructor Cliente
   Cliente.call(this, nombre, saldo);
   this.telefono = telefono;
}

Persona.prototype = Object.create(Cliente.prototype);
Persona.prototype.constructor = Cliente;

// Instanciarlo
const juan = new Persona('Juan', 5000, 1541251);
console.log(juan);
console.log(juan.nombreClienteSaldo());

Persona.prototype.mostrarTelefono = function () {
   return `El telefono de esta persona es ${this.telefono}`;
};

console.log(juan.mostrarTelefono());
