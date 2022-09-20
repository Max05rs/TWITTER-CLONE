import { Avatar } from '@material-ui/core'
import  PublishIcon  from '@material-ui/icons/Publish'
import  ChatBubbleOutlineIcon  from '@material-ui/icons/ChatBubbleOutline'
import  VerifiedUserIcon  from '@material-ui/icons/VerifiedUser'
import RepeatIcon from '@material-ui/icons/Repeat'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'
import './Post.css'

function Post() {
    return (
        <div className = "post" >
            <div className = "post__avatar">
                <Avatar src="https://cdn.fansshare.com/photo/cristianoronaldo/cristiano-ronaldo-funny-face-cristiano-ronaldo-323199414.jpg" />
            </div>
            <div className = "post__body">
                <div className = "post__header">
                    <div className = "post__headerText">
                    <h3>Rajwant Sandhu
                            <span className = "post__headerSpecial">
                                <VerifiedUserIcon className = "post__badge" />
                                @punpun
                            </span>
                    </h3>
                    </div>
                    <div className = "post__headerDescription">
                        <p>Mountains get me going!!! </p>
                    </div>
                </div>
                <img 
                    src = "https://media.giphy.com/media/NbnNvyCDQczPY81XtX/giphy.gif"
                    alt = ""
                />
                <div className = "post__footer">
                    <ChatBubbleOutlineIcon fontSize = "small" /> 
                    <RepeatIcon fontSize = "small" />
                    <FavoriteBorderIcon fontSize = "small" />
                    <PublishIcon  fontSize = "small" /> 
                </div>
            </div>    
        </div>
    );
}

export default Post
