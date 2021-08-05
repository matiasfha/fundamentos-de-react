import React from 'react';
import { Reply, Retweet, Like, Share } from '../assets/ToolbarImages';

/* 💡 Componente de Layout que renderiza una lista de componentes React que renderizan imagenes. */
const images = [Reply, Retweet, Like, Share]
const Toolbar = () => {
    return (
        <div className="toolbar">
            {images.map((Item, index) => {
                return <Item key={index} />
            })}
        </div>
    )
}


/* 💡 Este componente renderiza 1 Tweet basado en los datos recibidos en la prop `tweet`
La prop `tweet` es un objecto que contiene { avatar, author, tag, date, content }.
Tienes que acceder a los datos de la prop tweet para poder renderizarlos.
Puedes usar destructuring o acceder directamente sus propiedades
*/

const Tweet = ({ tweet }) => {
    
    return (
        <div className="tweet-card">
            <img src={/* avatar */} className="avatar" />
            <div className="container">
                <h5 className="author">
                    {/* author */}
                    <span>@{/* tag */} {/* date */}</span>
                </h5>
                <p>{/* content*/ }</p>
                <Toolbar />
            </div>
        </div>
    )
}

/* 🏋️‍♂️ 3. Implementa la lista de Tweets basado en el arreglo de tweets recibido mediante props.
Esta lista renderiza componentes Tweet.
No olivdes la prop key. */
const TweetList = ({ tweets = [] }) => {
    return (
        <div className="tweets">
            {/* 💡 Aquí debes iterar sobre la prop tweets para renderizar <Tweet /> */}
        </div>
    )
}

export default TweetList