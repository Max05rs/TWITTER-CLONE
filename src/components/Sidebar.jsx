import React from 'react';
import TwitterIcon from '@mui/icons-material/Twitter';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import ListAltIcon from '@mui/icons-material/ListAlt';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import SidebarOptions from './SidebarOptions';
function Sidebar() {
    return (  
        <div className='sidebar'>
            <div className="sidebar__twitterIcon">
                <TwitterIcon 
                    classname='sidebar__twittericon'
                />
                <SidebarOptions Icon={HomeIcon} text="Home" />
                <SidebarOptions Icon={SearchIcon} text="Explore" />
                <SidebarOptions Icon={NotificationsNoneIcon} text="Notifications" />
                <SidebarOptions Icon={MailOutlineIcon} text="Message" />
                <SidebarOptions Icon={BookmarkBorderIcon} text="Bookmarks" />
                <SidebarOptions Icon={ListAltIcon} text="Lists" />
                <SidebarOptions Icon={PermIdentityIcon} text="Profile" />
                <SidebarOptions Icon={MoreHorizIcon} text="More" />
            </div>
        </div>
    );
}

export default Sidebar;