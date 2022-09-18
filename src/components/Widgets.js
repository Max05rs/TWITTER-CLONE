import React from 'react'
import './Widgets.css'
import {
    TwitterTimelineEmbed,
    TwitterFollowButton,
    TwitterTweetEmbed,
    TwitterDMButton,
    TwitterHashtagButton,
    TwitterVideoEmbed
} from 'react-twitter-embed'
import SearchIcon from '@material-ui/icons/Search'

function Widgets() {
    return (
        <div className = "widgets">
            <div className = "widgets__input">
                <SearchIcon 
                    className = "widgets__SearchIcon" 
                />
                <input placeholder = "Search Twitter" type = "text" />
            </div>
            <div className = "widgets__widgetContainer">
                <h2>
                    Whats'happening
                </h2>
                <TwitterTweetEmbed tweetId = {"28023330"} />
                
                <TwitterTimelineEmbed 
                    sourceType = "profile"
                    screenName = "Crunchyroll"
                    options = {{ height: 400 }}
                />
                 
                 <TwitterVideoEmbed
                     id={'1571303113176268803'}
                />
                
                <TwitterHashtagButton
                    tag={'anime'}
                />
                
                <TwitterFollowButton
                    screenName={'Crunchyroll'}
                />
                
                <TwitterDMButton
                    id={28023330}
               />
            </div>
        </div>
    )
}

export default Widgets