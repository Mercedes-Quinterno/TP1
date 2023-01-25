// 1.

const tareas = [
	{
		titulo: "Estudiar Html",
		estado: "Terminada",
	}, {
		titulo: "Estudiar Css",
		estado: "En progreso",
	}, {
		titulo: "Estudiar Js",
		estado: "Pendiente",
	}, {
		titulo: "Practicar Js",
		estado: "En progreso"
	}
];

console.log(tareas);

// 2.

const agregarTareas = (titulo, estado) => {
	tareas.push({titulo, estado});
}

agregarTareas("Rever clases", "Pendiente");

console.log(tareas);

// 3.

const estados = ["Terminada", "En progreso", "Pendiente"];

const mostrarTareas = (estadoAFiltrar) => {
	const estadoValido = estados.includes(estadoAFiltrar);
	
	if (estadoValido) {
		return tareas.filter(({estado}) => estado === estadoAFiltrar);
	} else {
		return tareas;
	}
}

const tareasFiltradas = mostrarTareas("Pendiente");

console.log(tareasFiltradas);

const tareasFiltradas2 = mostrarTareas("Ejercicio");

console.log(tareasFiltradas2);

//4.


const agregarTareasConVerificacion = (nuevoTitulo, estado) => {

	const tituloYaExiste = tareas.find(({titulo}) => {
		return titulo === nuevoTitulo
	});

	const a = 1
	if (tituloYaExiste) {
	
		console.log(`La tarea con el titulo "${nuevoTitulo}" ya existe`); 
	} else {
		tareas.push({titulo, estado});	
	}
}

agregarTareasConVerificacion("Rever clases", "Pendiente");

console.log(tareas);

//5.

const ExisteTarea = (String) => {
	const tareasFiltradas =[]
	tareas.forEach(tarea => {
		if (tarea.titulo.includes(string))
		tareasFiltradas.push (tarea)
	})
	return tareasFiltradas
}
console.log(ExisteTarea("js"));