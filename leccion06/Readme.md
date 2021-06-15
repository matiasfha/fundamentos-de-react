# Lección 06 - Renderizado condicional

Una interfaz es la forma de representar datos en la pantalla para facilitar la interpretación de parte del usuario y también para permitir interactuar con esos datos. Es común que en dependiendo de alguna acción del usuario o de alguna particularidad de los datos quieras no mostrar ciertos componentes, es decir, querrás renderizar tus componentes de forma condicional.

Lograr esto es relativamente sencillo, sólo es necesario recordar que JSX no es un lenguaje de templates, si no, una forma más expresiva de realizar llamadas a la función `React.createElement`. También es adecuado que recuerdes que cada vez que quieras evaluar una expresión debes utilizar interpolación.

Existen dos formas de lograr un rederizado condicional:

- operador ternario
- operadores lógicos

> Es recomendable utilizar bloques condicionales u el operador ternario ya que el uso de simples operadores lógicos puede traer resultados inesperados

> ¿Qué ocurre si evalúas la siguiente operación? `0 && algunaFuncionQueRetornaUnNumero()`

## 🐾 Primeros Pasos

En esta lección revisaremos como renderizar componentes de forma condicional, es decir, definir cuando ser renderiza o no cierto componente.

Para esto definiremos el siguiente ejemplo.

> Una página de perfil de usuario que muestra sus contactos

## 🎯 Objetivos

- Conocer los 2 métodos de renderizar componentes de forma condicional.
- Conocer las limitaciones y resultados de cada método.
- Reconocer por que no se puede utilizar un bloque condicional `if`
- Ejercitar interpolación

## 🏋️‍♂️ Ejercicios

1. Renderiza el componente `<NoContacts>` sólo cuando el atributo `contacts` está vacío utilizando un operador lógico
2. Lo mismo pero utizando el operador lógico `&&`

## 💸 Crédito Extra

- Intenta utilizar un bloque condicional `if-else`. ¿Cuál es el resultado? ¿Por qué?


## 📣 Feedback
Por favor completa [este formulario](https://docs.google.com/forms/d/e/1FAIpQLSfVXaAKvJ7aj_de08YTet3g4Go5FV7QrI9TJWkYI1UDg1KW6A/viewform?usp=pp_url&entry.1045988887=Lección%2006)