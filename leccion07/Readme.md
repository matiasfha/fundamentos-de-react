# Lesson 7 - Composicion

Uno de los conceptos que cambió radicalmente la forma en que desarrollamos aplicaciones en la web es la idea de utilizar componentes.

Los componentes son las bases de construcción, los bloques lego, que nos permiten crear estructuras más complejas que nos permitirán desarrollar una solución.

Una característica de este modelo de componentes es su capacidad de unirse o

La forma en que React facilita la composición de componentes es usando las props.

Las props son la forma en que los componentes se comunican entre si, es su API, una los componentes en React tienen una prop particular: `children`. Esta prop permite pasar diferentes valores: componentes, elementos, strings, números o incluso `null`

Los valores pasados por medio de la prop `children` son después renderizados por el componente que las acepta.

```javascript
function BoxContainer({ children}) {
	return (
		<div className="box-container">
			{children}
		</div>
	)
}
```

Esto permite que otros componentes puedan utilizar `BoxContainer` como padre.

```javascript
function App() {
	return (
		<BoxContainer>
			<h1>Welcome</h1>
			<Dashboard>
				<DashboardNavBar />
				<DashboardContent />
			</Dashboard>
		</BoxContainer>
	)
}
```

Todo lo que este dentro del tag `<BoxContainer>` es considerado `children` y es pasado al componente `BoxContainer`.

Por lo general, estos componentes (como `BoxContainer`) que actúan como padres contenedores son componentes que definen la interfaz y estilo pero con poca o nada de lógica en si, es decir son componentes de Layout.

`children` es la prop por defecto para definir estos componentes de `Layout` y pasar componentes para que sean renderizados, pero ¿Qué ocurre si necesitas mas "espacios" dentro de tu interfaz?

Las prop pueden recibir cualquier tipo de dato, primitiva o función y un componente React es en esencia una función, entonces puedes crear una prop que reciba un componente.

```javascript
function App() {
	return (
		<BoxContainer>
			<h1>Welcome</h1>
			<Dashboard
				navbar={<DashboardNavBar />}				footer={<DashboardFooter />}
			>
				<DashboardContent />
			</Dashboard>
		</BoxContainer>
	)
}
```

En este ejemplo el componente `Dashboard` recibe dos nuevas props `navbar` y `footer` que aceptan un componente cada una. Si miramos dentro del componente podremos tener algo así.

```javascript
function Dashboard({ navbar, footer, children }) {
	return (
		<div className="dashboard-container">
			<nav className="dashboard-nav">
				{navbar}
			</nav>
			<h1>This is the Dashboard</h1>
			<div className="dashboard-content">
				{children}
			</div>
			{footer}
		</div>
	)
}
```

Como resultado tenemos un componente que se encarga de renderizar las “piezas” de tu interfaz permitiéndote cambiar esas piezas como más adecuado sea.

Este proceso de composición es nativo a React y puede ser realmente poderoso permitiendo por ejemplo:

- Especialización: A veces tienes componentes genéricos y un componente casí idéntico pero que aplica a un caso de uso particular o especial. En este caso simplemente aceptas diferentes props en el componente genérico y creas un componente especial que define esas props.
- Manejo de estado: Si bien aún no hemos hablado de que es el estado dentro de tu aplicación, es bueno saber que este patrón de utilizar las props para pasar datos y componer componentes complejos es la forma “natural” de React de manejar y manipular el estado.

## 🐾 Primeros Pasos

En esta lección trabajarás en conocer un concepto base de React y el modelo de componentes: Composición.

Para eso crearás algunos componentes base con los que “compondrás” una interfaz más compleja.

## 🎯 Objetivos

- Conocer como pasar datos y componentes utilizando props y la prop `children`.
- Conocer y utilizar las props para pasar componentes.
- Utilizar composición como el patrón base para manipular datos y la interfaz.

## 🏋️‍♂️ Ejercicios

- Define que props debe utilizar el componente `Page` para poder renderizar las distintas partes de la página
- Utiliza interpolación para renderizar los diferentes componentes hijos
 
## 💸 Crédito Extra

- Declara props en los componentes hijos: `PageBody` y `Footer`. Define estas props en el componente `App`. ¿Cómo puedes pasar estas props para ser renderizadas?

## 📣 Feedback
Por favor completa [este formulario](https://docs.google.com/forms/d/e/1FAIpQLSfVXaAKvJ7aj_de08YTet3g4Go5FV7QrI9TJWkYI1UDg1KW6A/viewform?usp=pp_url&entry.1045988887=Lección%2007)