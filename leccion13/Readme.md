# Lección 13 - Construyamos una interfaz

React ofrece dos formas básicas o por defecto para manejar los estilos de tus componentes.

Los elementos que usas para crear tus componente React aceptan dos props para estos fines `style` y `className`.

```javascript
const Container = () => {
	return <div style={{ border:"1px red solid",height:20,width:100 }}>Hola Mundo!</div>
}

const Title = () => {
	return <h1 className="title">Hola Mundo!</h1>
}

↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ 

HTML
<div style="border:1px red solid; height: 20px; width: 100px">Hola Mundo!</div>

<h1 class="title">Hola Mundo!</h1>
```

En el primer ejemplo puedes notar que el uso de la prop `style` es muy similar a como utilizas estilos `in-line` en  HTML, la gran diferencia aquí es que en React la prop `style` recibe un objeto (por eso se usan dobles llaves `{{` una para iniciar la interpolación y otra para definir el objeto). La otra diferencia es que las propiedades CSS son escritas en formato `camelCase` ¿por qué? Recuerda que JSX es básicamente javascript, babel se encarga de transformarlo a simples llamadas a `React.createElement`. Esta llamada hace uso de la propiedad `style` del DOM que utiliza el formato `camelCase` (la propiedad `style`  del DOM utiliza un objeto tipo [CSSStyleDeclaration](https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleDeclaration) )

La siguiente prop que podemos usar es `className` , esta es una de las pocas diferencias con HTML, `className` es lo mismo que usar `class`, es decir, acepta un string con los nombres de las clases CSS que serán aplicadas.

Estas son las formas básicas en que puedes aplicar estilos a tus componentes utilizando CSS tal como lo has hecho hasta ahora.

Pero recuerda que la idea de los componentes es que estos encapsulen tanto lógica como representación, por lo que los estilos también deberían estar encapsulados. Para lograr esto existen varias técnicas entre ellas.

- **inline styles:**  Esta es la forma base de la modularización de los estilos. Simplemente usando la prop `style` puedes pasar estilos que afectan solo al componente en juego.
- **CSS Modules**: Esta técnica te permite importar archivos css directamente en tu archivo javascript de un componente en particular, el css generado aquí afecta exclusivamente a tu componente.
- **CSS-in-JS**:  La idea de esta técnica es escribir el código css directamente usando el poder de javascript, dentro de esta area se encuentra styled-componentes

Revisaremos estas técnicas más avanzadas en una siguiente lección, por ahora usaremos la forma básica de agregar estilos a nuestra aplicación estática.

## 🐾 Primeros Pasos

En esta lección trabajaremos agregando estilos utilizando los dos métodos base para definir el css de tus componentes.

Tendremos el siguiente css disponible en nuestra página

```css
.list {
	  list-style: none
	}
	.item {
	  background-color: lightblue;
	  padding: 10px;
	  border: 1px blue solid;
	  border-radius: 5px;
	  margin: 5px;
	}
	.item--red {
	  background-color: red;
	}
	.item--blue {
	  background-color: lightblue;
	}
	.item--purple {
	  background-color:purple ;
	}
	.item--underline {
	  text-decoration: underline;
	}
```

Tu trabajo será utilizar estos estilos en tus componentes aplicando lo que hemos aprendido hasta ahora.

- Renderizado de arreglos
- interpolación

## 🎯 Objetivos

- Conocer como funciona las prop `style` y `className`.
- Utilizar conocimientos adquiridos en conjunto para dar estilos a los componentes.

## 🏋️‍♂️ Ejercicios

1. Renderiza una lista de elementos. El contenedor de la lista debe utiliza la clase `list` y los elementos de la lista deben usar estilo en linea por ejemplo para definir el tamaño de la fuente.
2. Define el uso de una prop para recibir el estilo en linea de cada Item. la definición del estilo en linea deberá hacerse fuera del componente Item.
3. Define el uso de diferentes tamaños de fuente para cada item renderizado. Para esto tendrás que crear un arreglo con los valores que quieres usar y luego utilizar `Array.map` para acceder a cada tamaño en el momento de renderizar cada elemento.

## 💸 Crédito Extra

1. Además de usar estilos en linea, utiliza la clase `item` en cada item.
2. Permite que el componente `Item` reciba una prop para modificar la clase css base.

## 📣 Feedback
Por favor completa [este formulario](https://docs.google.com/forms/d/e/1FAIpQLSfVXaAKvJ7aj_de08YTet3g4Go5FV7QrI9TJWkYI1UDg1KW6A/viewform?usp=pp_url&entry.1045988887=Lección%2013)