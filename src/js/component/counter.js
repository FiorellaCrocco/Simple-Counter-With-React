import React from "react";

const Counter = () => {
	const segundos = (sexto, quinto, cuarto, tercero, segundo, primero) => {
		document.querySelector("#Sexto").innerHTML = sexto;
		document.querySelector("#Quinto").innerHTML = quinto;
		document.querySelector("#Cuarto").innerHTML = cuarto;
		document.querySelector("#Tercero").innerHTML = tercero;
		document.querySelector("#Segundo").innerHTML = segundo;
		document.querySelector("#Primero").innerHTML = primero;
	};

	let i = 0;
	let j = 0;
	let k = 0;
	let l = 0;
	let m = 0;
	let n = 0;

	setInterval(() => {
		segundos(
			String(i),
			String(j),
			String(k),
			String(l),
			String(m),
			String(n)
		);
		if (i < 9) {
			i++;
		} else {
			i = 0;
			j++;
		}
		if (j > 9) {
			j = 0;
			k++;
		}
		if (k > 9) {
			k = 0;
			l++;
		}
		if (l > 9) {
			l = 0;
			m++;
		}
		if (m > 9) {
			m = 0;
			n++;
		}
	}, 1000);

	return (
		<div id="Contenedor">
			<h1 className="Cajas">🕙</h1>
			<h1 className="Cajas" id="Primero">
				0
			</h1>
			<h1 className="Cajas" id="Segundo">
				0
			</h1>
			<h1 className="Cajas" id="Tercero">
				0
			</h1>
			<h1 className="Cajas" id="Cuarto">
				0
			</h1>
			<h1 className="Cajas" id="Quinto">
				0
			</h1>
			<h1 className="Cajas" id="Sexto">
				0
			</h1>
		</div>
	);
};

export default Counter;
