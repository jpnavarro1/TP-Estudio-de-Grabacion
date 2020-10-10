/*

Cada semana revisan cada cliente por si les debe plata
si debe
	llaman por telefono
	indican importe a pagar
	piden que se acerque a pagar

*/

function revisionSemanal(archDeClientes) {
	for (let i = 0; i < archDeClientes.length; i++) {
		const cliente = archDeClientes[i]
		if (debe(cliente)) {
			console.log('llamar a ' + cliente.nombre + ' al ' + cliente.telefono + ' e indicarle que debe pagar $' + importeAPagar(cliente.pagos))
		}
	}
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

		mejoresClientesLista.push({
			nombre: cliente.nombre,
			contribuyo: pagosTotales
		})
	}

	mejoresClientesLista = ordenarPorContribucion(mejoresClientesLista)
	return mejoresClientesLista
}

//	Esta funcion esta basada en el formato de los clientes usado en la clase de YouTube.
//	Para poder utilizarla hay que modificar los clientes para que los pagos contengan
//	fecha y monto en lugar de importe y si fue pagado o no
function obtenerFacturacionEn(clientes, mes, anio) {
	/*
		recibe una lista de clientes, un mes y un año y tiene que devolver la cantidad de plata
		que pagaron los clientes en ese mes y año.

		version manual: recibo la carpeta con los clientes, reviso en la hoja de cada cliente
		los pagos hechos, los que son del periodo solicitado los copio en una hoja en blanco
		luego sumo todo lo de la hoja en blanco y eso me dice la facturacion total del periodo
	*/

	/*
		definir variable facturacion inicializada en 0
		
		recorrer la lista de clientes (hacer un for sobre ellos):
			ya tengo cada cliente, entonces
			recorro la lista de pagos de este cliente (for):
				ya tengo cada pago, entonces
				reviso si la fecha del pago coincide con la fecha solicitada (if):
					si coincide lo sumo a la variable facturacion
		devolver la variable facturacion
	*/

	let facturacion = 0

	for (let i = 0; i <clientes.length; i++) {
		cliente = clientes[i]
		for (let j = 0; j < cliente.pagos.length; j++) {
			pago = cliente.pagos[j]

			if (mes > 9) {
				if (pago.fecha.includes(mes + '/' + anio)) {
					facturacion += pago.importe
				}
			} else {
				if (pago.fecha.includes('0' + mes + '/' + anio)) {
					facturacion += pago.importe
				}
			}
		}
	}
	return facturacion
}
