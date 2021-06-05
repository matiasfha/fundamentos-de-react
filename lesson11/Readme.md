# Lección 10 - Formularios - Componentes Controlados

La forma primaria de obtener datos de un usuario en un sitio web es por medio del formularios.

Un formulario permite manejar un conjunto de elementos que capturan información del usuario. A su vez, permiten comunicarse con el servidor o una api externa al ser enviados.

Los elementos de un formulario funcionan ligeramente diferente a otros elementos HTML base ya que estos, de forma nativa, manejan un estado interno que les permite almacenar los datos capturados.

En React existen dos formas de manejar los formularios:

- **Componentes Controlados**
- **Componentes no-Controlados**

## Componentes Controlados

Como mencione antes, los elementos de un formulario HTML mantienen su propio estado interno y lo actualizan en base a las acciones del usuario. React también maneja su prop estado y si hablamos de estado mutable React ofrece su propia API para manejarlo. Esta es nuestra primera aproximación al manejo de estado.

La forma en que utilizas el estado en React es por medio de la función llamada `useState` esta función es parte de la api de **hooks**. Esta función es sencilla de utilizar, su intención almacenar en un solo lugar el estado que el componente renderizará. Esto permite que tus componentes reaccionen al cambio de estado y se vuelvan a renderizar para reflejar dicho cambio.

Su forma de uso es sencilla

```javascript
const [ count, setCount ] = React.useState(0)
```

La función recibe un argumento que representa el estado inicial, en este caso el valor `0` y retorna un arreglo o "tupla” cuyo primera valor representa el estado actual y el segundo valor siempre será una función (que puedes llamar como quieras) que te permite actualizar dicho estado.

Utilizaremos esta funcionalidad de React para mantener una “sola fuente de la verdad” al utilizar elementos de formulario, es decir, el componente que renderiza los elementos de formulario es también quien controlará el estado de los elementos en base a las acciones del usuario. Estos elementos que son manejados por el estado del componente padre son llamados **componentes controlados**.

En este tipo de componentes, el valor del input (o de cualquier otro elemento del formulario) es manejado por el estado de React. Ciertamente esto implica escribir un poco más de código, pero también te da gran poder y flexibilidad permitiéndote por ejemplo pasar este valor como prop a toras partes de la interfaz.

## Form

El element `<form>` te permite reunir elementos de captura de datos, es un contenedor que por lo general permite enviar los datos reunidos al servidor  un "manejador del formulario" que se define en el atributo `action`, esto además de enviar los datos también refresca la página, un comportamiento que actualmente no se utiliza mucho. Con React tienes una forma de controlar que hacer con los datos recolectados por medio del evento `onSubmit`.

El evento  `onSubmit` recibe una función que a su vez recibe un evento. Esta función es ejecutada cuando el formulario es "enviado", por ejemplo al presionar el botón `submit` .

SI estas usando componentes controlados, es decir, estado interno en tu componente entonces en el manejador de `onSubmit` simplemente debes leer el estado.

## 🐾 Primeros Pasos

En esta lección trabajaremos con elementos de un formulario para capturar información del usuario.

Para esto usaremos **componentes controlados** y definiremos una función para manejar el envío del formulario.

## 🎯 Objetivos

- Manejar estados de un form.
- Capturar los datos de un form.
- Conocer componentes controlados.

## 🏋️‍♂️ Ejercicios

1. Define el evento `onSubmit` para el form.
2. Define los manejadores de eventos para el input y para el select.
3. Actualiza el método `onSubmit` para que no refresque la página.

## 💸 Crédito Extra

1. Agrega un nuevo input al formulario y maneja un solo estado para todos los elementos. (Tip: puede usar la prop `name` para obtener los datos).
