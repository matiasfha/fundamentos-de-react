import React from 'react';
import { Image, Gif, Poll, Emoticon, Schedule } from '../assets/ToolbarImages';
/* 💡 Este componente es el que se encarga de renderizar la lista de Tweets */
import TweetList from './TweetList'
/* 💡 Este es un arreglo de tweets que se renderizarán. */
import data from '../tweet.json'
/* 💡 Este es el contenido de un tweet, contiene los datos del usuario que crea un tweet
será de utilidad para la funcionalidad de efectivamente twittear y mostrar el 
contenido en la lista de tweets */
const fakeTweet = {
    avatar: "https://robohash.org/tweeter.png",
    author: "Bax Jowitt",
    tag: "bjowitt0",
    date: "10/6/2020",   
    id: new Date().getTime()
}

// 💡 Esta es una lista de imagenes (Estas imagenes son componentes React). El componente Toolbar debe renderizarlas.
// no olvides utilizar la prop `key`.
// Este componente Toolbar define 
const images = [Image, Gif, Poll, Emoticon, Schedule]
const Toolbar = () => {
    return (
        <div className="tools-content">
            {/* 💡 Aqui debes renderizar las imagenes */}
        </div>
    )
}

const Header = () => {
    return (
        <div className="header">
            <h2>Inicio</h2>
        </div>
    )
}


// 🏋️‍♂️ 2. Crea el componente formulario para capturar información del usuario
// Puedes utilizar componentes controlados o no controlados
// 💡 Si usas componentes controlados recuerda usarás el hook React.useState('')
// 💡 Si usas componentes NO-controlados recuerda usarás el hook React.useRef()
// Encuentra más información [en este post](https://escuelafrontend.com/articulos/las-diferencias-entre-componentes-controlados-y-no-controlados-en-react)

const TweetForm = () => {
    // Define aquí el hook que usarás

    // 💡 Esta es la función que se ejecutará al presionar el boton "Twittear"
    // Esta función debe ejecutar la prop `onSubmit` que el formulario recibe
    const submit = (event) => {
       
    }

    // 💡 Si estás utilizando componentes controlados no olvides que
    // necesitas una función que te permita actualizar el estado del input/textarea 
    /*const updateValue = (event) => {
        
    }*/
    return (
        <form className="tweet-form" >
            <img src="" className="avatar" />
            <div className="container">
                {/* 💡 Aqui debes agregar el elemento textarea para capturar el texto del usuario */}
                <div className="tools">
                    <Toolbar />
                    {/* 💡 Aqui debes renderizar el botón para "Twittear" */}
                </div>
            </div>
        </form>
    )
}


/* 💡 Este es el componente principal que renderizará los componentes previamente definidos
Este componente es quien recibirá la lista de datos */
const Main = () => {
    /* 🍬 Necesitas capturar los datos en un estado para poder actualizar su contenido
    y debes compartir este estado con el componente "TweetList" */
    
    return (
        <main className="main">
            <Header />
            {/* 💡 Aqui debes renderizar el componente TweetForm y TweetList. */}
        </main>
    )
}



export default Main