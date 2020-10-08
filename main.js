/*
El estudio tiene en sus archivos:

Una hoja para cada cliente
	-Nombre de la banda
	-telefono
	-sesiones: lista de sesiones
		-duracion
		-fecha
	-registro de pagos: lista de pagos
		-importe
		-pagado

Hora de grabacion = $100
*/

const archivos = [
	{
		nombre: 'RockBand',
		telefono: '280 479-1495',
		sesiones: [
			{
				duracion:'1 hs',
				fecha:'5/9/2014'
			},

			{
				duracion: '2 hs',
				fecha: '7/10/2014'
			}
		],
		pagos: [
			{
				importe: 100,
				pagado: true
			},
			{
				importe: 200,
				pagado: false
			}
		]
	},

	{
		nombre: 'JazzBand',
		telefono: '223 453-6325',
		sesiones: [
			{
				duracion:'3 hs',
				fecha:'14/5/2016'
			},

			{
				duracion: '5 hs',
				fecha: '23/1/2018'
			}
		],
		pagos: [
			{
				importe: 300,
				pagado: false
			},
			{
				importe: 500,
				pagado: true
			}
		]
	}

]

/*

Cada semana revisan cada cliente por si les debe plata
si debe
	llaman por telefono
	indican importe a pagar
	piden que se acerque a pagar

*/

function debe(cliente) {
	pagos = cliente.pagos
	for (let i = 0; i < pagos.length; i++) {
		if (!pagos[i].pagado) {
			return true
		}
	}
	return false
}

function importeAPagar(pagos) {
	let pagoTotal = 0
	for (let i = 0; i < pagos.length; i++) {
		if (pagos[i].pagado === false) {
			pagoTotal += pagos[i].importe
		}
	}
	return pagoTotal
}

function revisionSemanal(archDeClientes) {
	for (let i = 0; i < archDeClientes.length; i++) {
		const cliente = archDeClientes[i]
		if (debe(cliente)) {
			console.log('llamar a ' + cliente.nombre + ' al ' + cliente.telefono + ' e indicarle que debe pagar $' + importeAPagar(cliente.pagos))
		}
	}
}

revisionSemanal(archivos)

/*
	Permitir la carga manual de nuevos clientes
		como crear nuevos clientes
		meterlos en el archivo mediante un push
*/

class nuevoCliente {
	constructor(nombre, telefono, sesiones, pagos) {
		this.nombre = nombre;
		this.telefono = telefono;
		this.sesiones = sesiones;
		this.pagos = pagos;
	}
}

let banda = new nuevoCliente('miNombre', 'miTelefono', [{duracion:'3 hs', fecha:'21/2/1997'}], [{importe: 300, pagado:false}])

//	             Cliente de pruebas funciona!!!
class clientePruebas {
	constructor(nombre, telefono, sesiones, pagos) {
		this.nombre = nombre;
		this.telefono = telefono;

		// sesiones recibe: [['duracion1', 'fecha1'], ['duracion2', 'fecha2'], ...]
		this.sesiones = darFormatoSesion(sesiones);
		this.pagos = pagos;

		function darFormatoSesion(sesionesSinFormato) {
			let arrayTemp = []
			let duracionTemp = ''
			let fechaTemp = ''
			for (let i = 0; i <sesionesSinFormato.length; i++) {
				duracionTemp = sesionesSinFormato[i][0]
				fechaTemp = sesionesSinFormato[i][1]
				arrayTemp.push({duracion: duracionTemp, fecha: fechaTemp})
			}
			return arrayTemp

		};
	}
}

let miPrueba = new clientePruebas('miNombre', 'miTelefono', [['3 hs', '21/2/1997']], [{importe: 300, pagado:false}])
//	             Cliente de pruebas funciona!!!

// recibe la lista de objetos y la ordena de mayor a menor
// respecto de la contribucion
// (para hacer menor a mayor solo hay que invertir 'a' y 'b')
function ordenarPorContribucion(listaDeContribuyentes) {
	// De cada par de objetos a comparar toma la contribucion 
	// hace la resta y decide cual es mayor en base al resultado (+, -, 0)
	// https://comoprogramo.wordpress.com/2012/06/29/como-ordenar-en-javascript-un-array-de-objetos-por-cualquier-campo/
	return listaDeContribuyentes.sort(function (a,b) { return (b.contribuyo - a.contribuyo)})
}


function mejoresClientes(listaClientes) {
	let mejoresClientesLista = []
	for (let i = 0; i < listaClientes.length; i++) {
		const cliente = listaClientes[i]
		let pagosTotales = 0

		for (let j = 0; j < cliente.pagos.length; j++) {
			if (cliente.pagos[j].pagado) {
				pagosTotales += cliente.pagos[j].importe
			}
		}

		mejoresClientesLista.push({nombre: cliente.nombre, contribuyo: pagosTotales})
	}
	mejoresClientesLista = ordenarPorContribucion(mejoresClientesLista)
	return mejoresClientesLista
}

let bestClients = mejoresClientes(archivos)
