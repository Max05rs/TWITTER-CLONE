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
                <Avatar />
            </div>
            <div className = "post__body">
                <div className = "post__header">
                    <div className = "post__headerText">
                    <h3>DisplayName
                            <span className = "post__headerSpecial">
                                <VerifiedUserIcon className = "post__badge" />
                                @username
                            </span>
                    </h3>
                    </div>
                    <div className = "post__headerDescription">
                        <p>This is message</p>
                    </div>
                </div>
                <img 
                    src = "src\assets\Profile_pic.jpeg"
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
//1.19.48