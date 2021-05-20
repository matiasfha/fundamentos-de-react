# Lección 03 - El mundo sin JSX

React ofrece una API “cruda” que te permite crear componentes y en realidad realizar todo lo que pienses sin necesidad de utilizar JSX.

Esta API es la que se encarga de la creación de los componentes y elementos sin que tengas que tocar directamente la API imperativa del DOM, aún así la API de React mantiene cierta semejanza.

DOM API:

`document.createElement(‘h1’)`

React API.

`React.createElement(‘h1’, props)`

La gran (e importante) diferencia es que la API de React acepta props. Un objeto que describe los atributos que este componente u elemento tendrá. En el caso de la API del DOM, si quieres modificar, por ejemplo, el contenido de texto del elemento harías:

```javascript
const h1 = document.createElement('h1')
h1.textNode = "Este es el título"
```

Con la API de React tienes una forma más declarativa:

```javascript
const h1 = React.createElement('h1', { children: 'Este es el titulo' })
```

Es también importante notar que para poder ejecutar React en el browser debes agregar dos script base `react` y  `react-dom`.

`react` es la librería que implementa las API necesarias para crear y manejar tus componentes. `react-dom` es quien "traduce" el árbol de componentes de React a algo que el DOM pueda entender.

Para renderizar tus componentes en pantalla usamos

```javascript
ReactDOM.render(rootElement, tuApp)
```

## 🐾 Primeros Pasos

En esta lección revisaremos como utilizar la API “cruda” para crear elementos y componentes React.

## 🎯 Objetivos

- Conocer la API base de React para crear elementos y componentes.

## 🏋️‍♂️ Ejercicios

1. Crear un elemento h1

Para este ejercicio crearás un elemento `h1` utilizando `React.createElement` y lo desplegarás en la página principal.

2. Crear un componente React

Ahora usaremos la misma API `React.createElement` para crear un componente React.

Tip: Recuerda nombrarlo con mayúsculas

3. Crear elementos anidados.

En este caso tendrás que utilizar la api `React.createElement` para crear un grupo de componentes anidados.

Tip: Recuerda que `React.createElement` acepta como segundo parámetros un arreglos de `props` donde una de ellas puede ser `children`

## 💸 Crédito Extra

1. Utilizando `React.createElement` crea una lista de 3 elementos utilizando `ul` y `li`.
2. ¿Como definirías esta API. Imperativa o Declarativa? ¿Cómo se relaciona con la API nativa del DOM?
