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

// recibe la lista de objetos y la ordena de mayor a menor
// respecto de la contribucion
// (para hacer menor a mayor solo hay que invertir 'a' y 'b')
function ordenarPorContribucion(listaDeContribuyentes) {
	// De cada par de objetos a comparar toma la contribucion 
	// hace la resta y decide cual es mayor en base al resultado (+, -, 0)
	// https://comoprogramo.wordpress.com/2012/06/29/como-ordenar-en-javascript-un-array-de-objetos-por-cualquier-campo/
	return listaDeContribuyentes.sort(function (a,b) { return (b.contribuyo - a.contribuyo)})
}
