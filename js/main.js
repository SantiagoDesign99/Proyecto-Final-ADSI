// ==== Codigo para mostrar y ocultar contraseña del inicio de sesión ====
const iconEye = document.querySelector('.icon-eye');
const iconEyeR = document.querySelector('.eye-repetirC');
const iconEyeA = document.querySelector('.eye-asignar');


iconEye.addEventListener('click', function () {
	const icon = this.querySelector('i');

	if (this.nextElementSibling.type == 'password') {
		this.nextElementSibling.type = 'text';
		icon.classList.remove('fa-eye-slash');
		icon.classList.add('fa-eye');
	} else {
		this.nextElementSibling.type = 'password';
		icon.classList.remove('fa-eye');
		icon.classList.add('fa-eye-slash');
	}
});

// ==== Codigo para mostrar y ocultar contraseña del modal has olvidado contraseña (input repetir contraseña) ====

iconEyeR.addEventListener('click', function () {
	const icon = this.querySelector('i');

	if (this.nextElementSibling.type == 'password') {
		this.nextElementSibling.type = 'text';
		icon.classList.remove('fa-eye-slash');
		icon.classList.add('fa-eye');
	} else {
		this.nextElementSibling.type = 'password';
		icon.classList.remove('fa-eye');
		icon.classList.add('fa-eye-slash');
	}
});

iconEyeA.addEventListener('click', function () {
	const icon = this.querySelector('i');

	if (this.nextElementSibling.type == 'password') {
		this.nextElementSibling.type = 'text';
		icon.classList.remove('fa-eye-slash');
		icon.classList.add('fa-eye');
	} else {
		this.nextElementSibling.type = 'password';
		icon.classList.remove('fa-eye');
		icon.classList.add('fa-eye-slash');
	}
});

// ==== funcionalidad del btn flotante (cambiar contraseña) ====

$('.botonF1').hover(function () {
	$('.btn').addClass('animacionVer');
});
$('.contenedor').mouseleave(function () {
	$('.btn').removeClass('animacionVer');
});

// ==== funcionalidad paginacion (datatables) ====

// ==== funcionalidad formato de cotizaciones ====

//Agregar nueva fila
const tBody = document.getElementById('table-body');

addNewRow = () => {
	const row = document.createElement('tr');
	row.className = 'single-row';
	row.innerHTML = `<td class="td">
	<form action="">
		<div class="input-group mb-3">
			<input
				type="search"
				class="form-control search"
				placeholder="Buscar articulo"
				aria-label="Username"
				aria-describedby="basic-addon1"
			/>
		</div>
	</form>
</td>
<td class="td">
	<input
		type="/"
		placeholder="0"
		name="unit"
		class="unit input-articulo"
		id="unit"
		onkeyup="getInput()"
	/>
</td>
<td class="td">
	<input
		type=""
		placeholder="$"
		name="precio"
		class="price input-articulo"
		id="precio"
		onkeyup="getInput()"
	/>
</td>
<td class="td">
	<input
		type=""
		placeholder="$"
		name="amount"
		class="amount input-articulo"
		id="amount"
		disabled
	/>
</td>
<td style="text-align: center;"><span class="material-icons" action="delete">delete_outline</span></td> `;

	tBody.insertBefore(row, tBody.lastElementChild.previousSibling);
};

document.getElementById('add-row').addEventListener('click', (e) => {
	e.preventDefault();
	addNewRow();
});

//OBTENER ENTRADAS, MULTIPLICAR Y OBTENER EL PRECIO DEL ARTÍCULO

getInput = () => {
	var rows = document.querySelectorAll('tr.single-row');
	rows.forEach((currentRow) => {
		var unit = currentRow.querySelector('#unit').value;
		var precio = currentRow.querySelector('#precio').value;

		amount = unit * precio;
		currentRow.querySelector('#amount').value = amount;
		overallSum();
	});
};

//Obtener la suma del monto de articulos y vr unit
overallSum = () => {
	var arr = document.getElementsByName('amount');
	var total = 0;
	for (var i = 0; i < arr.length; i++) {
		if (arr[i].value) {
			total += +arr[i].value;
		}
		document.getElementById('Subtotal').value = total;
	}
};

//Obtener la suma para el Total cotizacion

function calcular() {
	try {
		var a = parseFloat(document.getElementById('Subtotal').value);
		b = parseFloat(document.getElementById('flete').value);

		document.getElementById('totalCotizacion').value = a + b;
	} catch (e) {}
}

//Eliminar fila de la tabla
tBody.addEventListener('click', (e) => {
	let el = e.target;
	const deleteROW = e.target.attributes.action.value;
	if (deleteROW == 'delete') {
		delRow(el);
		overallSum();
	}
});

//Fila de destino y eliminar de DOM;
delRow = (el) => {
	el.parentNode.parentNode.parentNode.removeChild(el.parentNode.parentNode);
};

// ==== funcionalidad generar PDF ====

document.addEventListener('DOMContentLoaded', () => {
	// Escuchamos el click del botón
	const $boton = document.querySelector('#btnCrearPdf');
	$boton.addEventListener('click', () => {
		const $elementoParaConvertir = document.querySelector('#cotizacion'); // <-- Aquí puedes elegir cualquier elemento del DOM
		html2pdf()
			.set({
				margin: 1,
				filename: 'Cotizacion.pdf',
				image: {
					type: 'jpeg',
					quality: 0.98,
				},
				html2canvas: {
					scale: 3, // A mayor escala, mejores gráficos, pero más peso
					letterRendering: true,
				},
				jsPDF: {
					unit: 'in',
					format: 'a3',
					orientation: 'portrait', // landscape o portrait
				},
			})
			.from($elementoParaConvertir)
			.save()
			.catch((err) => console.log(err));
	});
});

// ---------------------------------------------

// function getvalue() {
//     var meses = document.getElementById("meses").value;
//     var valor = document.getElementById("valor").value;

//     var result = (meses * valor) / 12;
//     document.getElementById("total").value = result.toLocaleString("en-US", {
//         style: "currency",
//         currency: "USD"
//     });
// }

// getvalue()

// ---------------- CODIGO CONVERTIDOR
const formatterPeso = new Intl.NumberFormat('es-CO', {
	style: 'currency',
	currency: 'COP',
	minimumFractionDigits: 0,
});
var value = 20000;
console.log(formatterPeso.format(value));
// → $ 20.000

// ============= convetidor de número entero a decimales

// $('#fomularioCotizacion').on({
// 	focus: function (event) {
// 		$(event.target).select();
// 	},
// 	keyup: function (event) {
// 		$(event.target).val(function (index, value) {
// 			return value.replace(/\D/g, '').replace(/\B(?=(\d{3})+(?!\d)\.?)/g, ',');
// 		});
// 	},
// });
