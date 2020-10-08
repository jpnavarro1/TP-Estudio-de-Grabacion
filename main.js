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

