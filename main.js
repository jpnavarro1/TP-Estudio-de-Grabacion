/*
El estudio tiene en sus archivos:

Una hoja para cada cliente
	-Nombre de la banda
	-telefono
	-sesiones de grabacion (duración y fecha)
	-registro de pagos

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
			pagoTotal = pagoTotal + pagos[i].importe
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
