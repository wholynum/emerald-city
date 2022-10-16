document.getElementById('btnCalc').onclick = () => {
	calcCount()
}

function calcCount() {
	const day = document.getElementById('dayCalc').value
	const hour = document.getElementById('timeCalc').value
	const population = 591600
	let count = (population / 10000) * day * hour
	if (day != 0) {
		document.getElementById('countCalc').innerHTML = Math.round(count)
		document.getElementById('infoCalc').style.display = 'block'
	}
}
