import React from 'react'
import './Feed.css'
import TweetBox from './TweetBox'
import Post from './Post'
import Switch from './Switch'

function Feed() {
    return (
        <div className = "feed">
            <div className = "feed__header">
                <h2 className='switch_home'>Home
                    <Switch />
                </h2>
            </div>

            <TweetBox />
            <Post />
            <Post />

            {/* <Post /> */}
        </div>
    )
}
export default Feed