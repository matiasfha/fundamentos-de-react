# Lección 10 - Eventos

Una aplicación web tiene dos tareas esenciales: presentar información al usuario y “reaccionar” a acciones que el usuario realiza. Hasta ahora hemos visto como presentar información - creando componentes para renderizar cierto contenido - pero, ¿cómo reaccionar a una acción del usuario?.

Reaccionar al usuario es conocido como manejar eventos y esto es algo que javascript ya implementa por medio de los eventos del DOM.

Los eventos en React son similares a los eventos del DOM, con pequeñas diferencias.

- Los eventos en React son nombrados en `camelCase` por ejemplo . `onClick`.
- El evento que pasas como argumento es una función y no un string como en el DOM.

```javascript
<button onClick={submit}>Submit</button>
```

Otra diferencia se encuentra en una práctica común al escribir HTML y vanilla JS: utilizar `return false;` para evitar el comportamiento por defecto del evento en cuestión. En React debes utilizar explicitamente `preventDefault`. ¿por qué? React no expone los eventos del DOM directamente, al contrario, expone una API llamadas `SyntheticEvent`.

Estos eventos son implementados de forma compatible con todos los navegadores (basados en el [spec W3C](https://www.w3.org/TR/DOM-Level-3-Events/)). Cuando defines un manejador de eventos como `onClick` la función que defines como argumento recibe un evento sintético. Este evento tiene la misma interfaz que los eventos nativos del navegador, por lo que su uso se hace "conocido”.

La idea de usar esta API es que React normaliza los eventos para hacer que funcionen de la misma manera en todos los navegadores.

Ahora, volviendo al uso de `preventDefault`.  ¿Cómo evitas el comportamiento por defecto de un evento?. Simplemente accediendo al argumento evento y llamando `preventDefault`

```javascript
function onClickEvent(event) {
	event.preventDefault()
}
```

Una práctica común, es utilizar los eventos para pasar ciertos datos de un lado a otro, por ejemplo para pasar el `id` de algún elemento para crear una llamada al servidor, para lograr esto debes pasar argumentos extra a la función que usas como manejador de eventos, para hacer esto simplem`nte rodeas tu función con otra función.

```javascript
items.map(item => {
	<button onClick={(event) => onClickHandler(event, item.id)}>{item.name}</button>
})
```

## 🐾 Primeros Pasos

En esta lección trabajaremos agregando estilos utilizando los dos métodos base para definir el css de tus componentes.

Para esta lección usaremos algunos elementos que solicitan acciones de usuario para así capturar sus eventos, también crearemos un componente con el mismo objetivo

- Boton
- Selectbox
- Input
- div: Si!. En React es posible agregar un manejador de eventos a cualquier componente. Los eventos de React son “sintéticos” y puede ser utilizados en cualquier elemento.

## 🎯 Objetivos

- Aprender como agregar eventos a un elemento.
- Conocer como manejar los eventos definidos.
- Conocer como definir componentes que acepten eventos.

## 🏋️‍♂️ Ejercicios

1. Crea un elemento botón que al ser clickeado muestra un alerta.
2. Crea un elemento `select` que al cambiar el valor seleccionado muestra una alerta con el valor.
3. Crea un elemento input que muestra en consola lo que se escribe.

## 🍬 Crédito Extra

1. Crea un **componente** `Button` que acepta una prop `onClick`. Esta función estará definida en el componente padre.

## 📣 Feedback
Por favor completa [este formulario](https://docs.google.com/forms/d/e/1FAIpQLSfVXaAKvJ7aj_de08YTet3g4Go5FV7QrI9TJWkYI1UDg1KW6A/viewform?usp=pp_url&entry.1045988887=Lección%2010)