# Lección 12 - Formularios - Componentes no controlados

## Componentes no-Controlados

La gran diferencia con los componentes controlados, es que en este caso el elemento no es manejado por el estado de su componente Padre, si no, se utiliza directamente el DOM.

Para escribir un componente no controlado conoceremos brevemente otro **hook**.

En estos componentes, en vez de escribir un manejador de eventos para cada actualización de estado podemos usar un **ref**  para obtener los valores directamente desde el DOM.

Un **ref** es una "válvula de escape" del flujo de datos de un componente React. El flujo normal es que las `props` sean la única forma en que un componente padre interactúe con los componente que renderiza. Si necesitas modificar un componente hijo, simplemente actualizas las `props` y este se re-renderizará.

**ref** te provee una forma de acceder a los nodos del DOM o elementos que son creados "on-the-fly" en el renderizado, ejemplos de uso de esto es:

- Manejar el foco o selección de texto de un elemento
- Inicializar animaciones de forma imperativa.
- Integración de librerías externas no directamente compatibles con React.

Para crear un **ref**  utilizamos el hook `useRef` que crea un objeto que se mantiene consistente entre diferentes renderizados del componente, es decir, cuando el ref cambia no se lanza un nuevo render. El objeto tiene un atributo llamado `current` que se mantiene actualizado. Para interactuar con el DOM, puedes pasar el `ref` a cualquier elemento y React se enlazar el valor de `current` con el elemento en el DOM.

```javascript
const Component = () => {
	const inputRef = React.useRef()
	
	const onClickButton = () > {
		console.log(inputRef.current.value)
	}

	return (
		<div>
			<input type="text" ref={inputRef}
			<button onClick={onClickButton}>Click</button>
		</div>
	)
}
```

## Form

Como ya sabemos el evento `onSubmit` del formulario recibe una función que permite capturar o reunir la información del formularia para después ser procesada.

Si estás utilizando componentes no-controlados, tendrás que acceder a los `ref` de cada elemento para obtener su valor

## 🐾 Primeros Pasos

En esta lección trabajaremos con elementos de un formulario para capturar información del usuario.

Para esto usaremos **componentes no-controlados** y definiremos una función para manejar el envío del formulario.

## 🎯 Objetivos

- Conocer el uso básico de un `ref`.
- Capturar los datos de un form.
- Conocer componentes no-controlados.

## 🏋️‍♂️ Ejercicios

1. Define el evento `onSubmit` para el form.
2. Captura los datos desde los ref utilizados.


## 📣 Feedback
Por favor completa [este formulario](https://docs.google.com/forms/d/e/1FAIpQLSfVXaAKvJ7aj_de08YTet3g4Go5FV7QrI9TJWkYI1UDg1KW6A/viewform?usp=pp_url&entry.1045988887=Lección%2012s)