# Lesson 08 - Arrays

Una de las estructuras de datos más utilizada en cualquier aplicación web es el Array. Esta simple estructura es la forma más sencilla de contener y manipular colecciones de datos. Por esto, es importante conocer como trabajar con ella al momento de utilizar componentes React.

Una de las tareas más comunes relacionadas con arrays es la idea de renderizar una lista de elementos en la interfaz, esta lista de elementos está representada por un array.

Para poder renderizar una lista debemos iterar sobre ella y como ya revisamos en la lección sobre JSX, podemos utilizar interpolación para escribir código javascript válido en forma de una expresión que nos permita iterar sobre los elementos, en este caso usaremos `Array.map` .

> Una expresión produce un valor y puede ser escrita en cualquier parte donde un valor sea esperado, por ejemplo como un argumento de una función.

`Array.map` permite iterar sobre un arreglo y retorna un nuevo arreglo, es decir retorna un valor. Este nuevo arreglo es el que será renderizado por React.

Un componente React acepta arreglos de valores o componentes en su prop `children` por lo que podemos transformar los elementos de arreglo en un nuevo componente o simplemente renderizar el arreglo directamente.

Una vez que tenemos el arreglo renderizado podemos ver que React nos avisa de un problema: Nos falta definir una prop llamad a `key` en nuestros compoenntes.

Esta prop debe recibir un valor único e invariable. Esto es simple de resolver en un caso donde el arreglo de datos utilizado es fijo y no cambia en el tiempo, podemos resolver este problema simplemente utilizando un valor como el indice del elemento en el arreglo. ¿Pero que ocurre si el arreglo de datos cambia en el tiempo?

La prop `key` le ayuda a React a mantener una forma de "rastrear" los elementos renderizados en cada proceso de actualización, si la prop no está presente React no podrá saber que elemento cambió y donde estaba y puede mezclar algunas cosas.

Un caso es que renderizas la lista y despues agregas un nuevo elemento. React no podrá identificar si el elemento que agregaste se debe ubicar al principio, final o en medio, esto es por que React no puede entender nuestras intenciones y solo ve que en un momento se le entrego una lista a renderizar, y luego se le pide renderizar una lista diferente. React intenta comparar el antes y después por lo que hará su mejor suposición y muchas veces esto funciona.

Pero las cosas se complican cuando alguno de los elementos del arreglo es un componente que contiene cierto estado React puede errar y complicar el resultado de tu UI.

> Aquí estado puede ser tanto estado interno de un componente personalizado o incluso estado de un elemento HTML como un input.

Puedes profundizar más sobre como funciona la prop `key` revisando el siguiente artículo en Escuela Frontend: [¿Cómo funciona la prop key en React?](https://escuelafrontend.com/articulos/como-funciona-la-prop-key-en-react)

## 🐾 Primeros Pasos

En esta lección trabajaremos renderizando múltples elementos de forma “automática”. Para ello construiremos una lista de elementos basados en un arreglo de strings.

## 🎯 Objetivos

- Conocer como renderizar múltiples elementos utilizando interpolación y `Array.map`
- Comprender que hace la prop `key` y por que es necesaria.

## 🏋️‍♂️ Ejercicios

1. Renderiza manualmente una lista de elementos.
2. Utiliza `Array.map` para crear una lista de elementos basado en un arreglo de strings.
3. Agrega la prop `key` faltante utilizando un valor único.

## 💸 Crédito Extra

- Revisa el siguiente demo sobre como funciona la prop `key`. ¿Cuál es el problema al eliminar elementos?. ¿Cómo el uso de la prop `key`afecta el funcionamiento del demo?
[https://codesandbox.io/s/react-array-keys-qmwwk?from-embed=&file=/src/App.js](https://codesandbox.io/s/react-array-keys-qmwwk?from-embed=&file=/src/App.js)

## 📣 Feedback
Por favor completa [este formulario](https://docs.google.com/forms/d/e/1FAIpQLSfVXaAKvJ7aj_de08YTet3g4Go5FV7QrI9TJWkYI1UDg1KW6A/viewform?usp=pp_url&entry.1045988887=Lección%2008)