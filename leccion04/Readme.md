# Lección 04 - Conociendo JSX

JSX es una abstracción sobre la API `Reac.createElement` que permite expresar de forma aún más declarativa la definición de la UI que quieres renderizar.

JSX es una forma más intuitiva de crear componentes, al menos más intuitiva o declarativa que la API `React.createElement`. Es muy similar a HTML.

Pero JSX no es javascript por lo que necesitamos algunas herramientas extra, en particular [Babel](https://babeljs.io).

Babel se encarga de transpilar o transformar el código JSX en javascript puro, es decir en llamadas a `React.createElement`.

Es una buena idea recordar que tras el uso de JSX hay un grupo de llamadas a `React.createElement` a modo de “compilador humano". Esto te ayudará cuando necesites realizar operaciones complejas sobre JSX.

## 🐾 Primeros Pasos

Iniciaremos los primeros pasos utilizando JSX para crear elementos y componentes React incluyendo anidación, comprendiendo así la ventajas que ofrece el uso de JSX.

Para eso primero agregaremos babel a nuestra app, inicialmente usaremos una versión “standalone” que permite ejecutar el proceso de transpilación directamente en el browser. Es importante mencionar que esta forma estática de uso de Babel no es la adecuada para producción, para esos casos estarás ejecutando el proceso de compilación en tiempo de compilación, antes de hacer tu deploy.

## 🎯 Objetivos

- Crear componentes y elementos JSX.

Para lograr esto primero debemos agregar Babel a nuestro proyecto, lo haremos directamente con un snippet en nuestro HTML

```other
<script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
```

Además tenemos que realizar una pequeña modificación extra, en el tag `<script>`que contiene nuestro trabajo agregaremos al atributo `type=“text/babel”`

## 🏋️‍♂️ Ejercicios

1. Crear un elemento h1 usando JSX

Para este ejercicio crearás un elemento `h1` utilizando JSX y lo desplegarás en la página principal.


## 🍬 Crédito Extra

1. Utilizando `JSX` crea una lista de 3 elementos utilizando `ul` y `li`.
2. Ahora, usando la lista antes creada ¿Cómo automatizarías la creación de múltiples items `li` ?

## 📣 Feedback
Por favor completa [este formulario](https://docs.google.com/forms/d/e/1FAIpQLSfVXaAKvJ7aj_de08YTet3g4Go5FV7QrI9TJWkYI1UDg1KW6A/viewform?usp=pp_url&entry.1045988887=Lección%2004)