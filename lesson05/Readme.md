# Leccion 05 - Props

En React los componentes son representados por funciones encapsulan lógica y descripción de la UI usando JSX. También sabemos que un componente React es en cierta forma una unidad aislada del mundo, pero al mismo tiempo sabemos que debe existir una forma de que el componente se comunique con el mundo exterior. Para esto se usa el concepto de **props**.

Al igual que las funciones aceptan argumentos, un componente React acepta “valores” que son pasados por medio de un objeto llamado **props**.

Recordemos la API cruda de `React.createElement`

```javascript
React.createElement(type, [props],[...children])
```

Lo que esta definición indica es que un componente creado con `React.createElement` acepta un objeto opcional llamado **props** y un número indefinido de hijos.

Para escribir lo mismo en JSX y pasar estos valores llamados props, simplemente agregamos “atributos” a la declaración

```javascript
<Title color="red">Este es el Titulo</Title>
```

En este ejemplo `color=“red”` define una **prop** llamada `color` con el valor string `red`.

¿Cómo se reciben las props en un componente?

Cuando definimos un componente, en realidad estamos creando una función que retorna JSX, para que esta función sea considerada un componente React valido debe aceptar solo un argumento, este único argumento es el que llamamos **props**.

```javascript
const Title = (props) => {
	const { color, children } = props 
	return <h1>{children} - {color}</h1>
}
```

El componente título es una función que acepta un argumento, este argumento llamado **props** es un objeto cuyos atributos son los nombres que has dado a las props, por lo que puedes usar destructuring para acceder a ellos (puedes hacerlo también directamente en los argumentos).

Existe una prop por defecto que no fue definida por ti. **children**. Esta prop (opcional) hace referencia a el tercer argumento de  `React.createElement.` **children** es una estructura de datos opaca, es decir, no hay que lidiar con ella directamente, si no, utilizando las utilidades que la propia API ofrece.

**children** puede ser: Un string, boolean, número, null, un elemento, un componente, o un array de los anteriores.

Además en este ejemplo pudiste ver otra característica de JSX. Interpolación. Esta es la forma en que puedes definir declaraciones javascript dentro de tu JSX, es muy similar a usar template literals, es una forma de “poner valores” desde un mundo en otro.

En el ejemplo, abrimos el uso de JSX y usamos las llaves `{}`para determinar que  estaremos interpolando javascript dentro de JSX.

Puedes interpolar lo que sea dentro de las llaves `{}` mientras sea javascript válido, solo recuerda que lo que estás haciendo al interpolar dentro de JSX es en realidad creando un nuevo **children** que es el tercer arugmento de `React.createElement`

```javascript
const Title = (props) => {
	const { color, children } = props 
	return <h1>{children} - {color}</h1>
}
↓	↓	↓	↓	↓	↓	↓	↓	↓	↓	↓	↓

const Title = (props) => {
	const { color, children } = props
	return React.createElement('h1',null, children, " _ ", color)
}
```

## 🐾 Primeros Pasos

En esta lección trabajaremos pasando props a nuestros componentes y renderizando interpolaciones de esos valores.

Para esto crearemos componentes que se comunicaran entre ellos mediante el uso de **props**.

## 🎯 Objetivos

- Conocer como comunicar componentes mediante el uso de props.
- Utilizar interpolación y conocer que es y no posible de interpolar en React.

## 🏋️‍♂️ Ejercicios

- [ ] TODO Crear un componente X que reciba las props Y y Z para hacer SOMETHING
2. Crear un componente padre que pase las props X, Y Z al componente hijo

## 💸 Crédito Extra

1. Considera que tienes un objeto con varios atributos, ¿cómo puedes pasar ese objeto directamente como props a tu componente?
2. Al interpolar sólo puedes usar declaraciones, ¿cómo puedes renderizar condicionalmente dentro de JSX?
