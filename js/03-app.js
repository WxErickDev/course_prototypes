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

// Instanciarlo
const pedro = new Cliente('Pedro', 6000);

/** Llamando a las funciones **/

//Ver el tipo de cliente
console.log(pedro.tipoCliente());

//Ver el nombre, saldo y tipo de cliente
console.log(pedro.nombreClienteSaldo());

// Retirar el saldo pasado por el argumento
pedro.retiraSaldo(1000);

//Ver el nombre, saldo y tipo de cliente
console.log(pedro.nombreClienteSaldo());

// Mostrar el objeto "pedro"
console.log(pedro);
