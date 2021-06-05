import React from 'react';
import { Reply, Retweet, Like, Share } from '../assets/ToolbarImages';

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

const Tweet = ({ tweet }) => {
    const { avatar, author, tag, date, content } = tweet;
    return (
        <div className="tweet-card">
            <img src={avatar} className="avatar" />
            <div className="container">
                <h5 className="author">
                    {author}
                    <span>@{tag} {date}</span>
                </h5>
                <p>{content}</p>
                <Toolbar />
            </div>
        </div>
    )
}

const TweetList = ({ tweets = [] }) => {
    return (
        <div className="tweets">
            {tweets.map(tweet => <Tweet key={tweet.id} tweet={tweet} />)}
        </div>
    )
}

export default TweetList