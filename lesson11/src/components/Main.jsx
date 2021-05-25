import React from 'react';
import { Image, Gif, Poll, Emoticon, Schedule } from '../assets/ToolbarImages';
import TweetList from './TweetList'
import data from '../tweet.json'

const images = [Image, Gif, Poll, Emoticon, Schedule]
const Toolbar = () => {
    return (
        <div className="tools-content">
            {images.map((Item, index) => {
                return <Item key={index} />
            })}
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

const TweetForm = ({ onSubmit }) => {
    const [content, setContent] = React.useState('')

    const submit = (event) => {
        event.preventDefault()
        if (content !== '') {
            onSubmit(content)
        }

    }

    const updateValue = (event) => {
        setContent(event.currentTarget.value)
    }
    return (
        <form className="tweet-form" onSubmit={submit}>
            <img src="" className="avatar" />
            <div className="container">
                <textarea placeholder="¿Qué está pasando?" rows={1} onChange={updateValue} />
                <div className="tools">
                    <Toolbar />
                    <button type="submit">Twittear</button>
                </div>
            </div>
        </form>
    )
}

const Main = () => {
    const [tweets, setTweets] = React.useState(data)
    const user = {
        avatar: 'https://pbs.twimg.com/profile_images/735242324293210112/H8YfgQHP_400x400.jpg',
        author: 'Egghead',
        tag: 'eggheadio',
    }
    const onSubmit = (tweet) => {
        const newTweet = {
            content: tweet,
            date: new Date(Date.now()).toLocaleString(),
            id: Date.now(),
            ...user
        }
        setTweets(prevTweets => {
            return [newTweet, ...prevTweets]
        })
    }
    return (
        <main className="main">
            <Header />
            <TweetForm onSubmit={onSubmit} />
            <TweetList tweets={tweets} />
        </main>
    )
}



export default Main