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

revisionSemanal(archivos)

let bestClients = mejoresClientes(archivos)

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

