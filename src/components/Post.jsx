import { Avatar} from '@material-ui/core';
import VerifiedUserIcon from '@material-ui/icons';
import React from 'react'
import "./Post.css"

function Post() {
  return (
    <div className='post'>
        <div className='post_avatar'>
            <Avatar />
        </div>
        <div className='post_body'>
            <div className='post_header'>
                <div className='post_headertext'>
                    <h3>DisplayName</h3>
                    <span className='post_headerSpecial'>
                    
                    </span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Post