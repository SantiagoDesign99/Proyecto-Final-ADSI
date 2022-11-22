$(document).ready(function () {
	$('#datatable').DataTable({
		// scrollX: true,
		language: {
			processing: 'Tratamiento en curso...',
			search: 'Buscar :',
			lengthMenu: 'Agrupar de _MENU_ items',
			info: 'Mostrando el item _START_ al _END_ de un total _TOTAL_ items',
			infoEmpty: 'No existe datos. ',
			infoFiltered: '(filrando de _MAX_ elementos en total)',
			infoPostFix: '',
			loadingRecords: 'Cargando...',
			zeroRecords: 'No se encontraron datos con tú busqueda',
			emptyTable: 'No hay datos disponibles en la tabla',
			paginate: {
				first: 'Primero',
				previous: 'Anterior',
				next: 'Siguiente',
				last: 'Ultimo',
			},
			aria: {
				sortAscending: ': active para ordenar la columna en orden ascendente',
				sortDescending: ': active para ordenar la columna en orden descendente',
			},
		},
		lengthMenu: [[10], [10]],
	});
});
