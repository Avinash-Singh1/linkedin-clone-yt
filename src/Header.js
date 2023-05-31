import React from 'react'
import './Header.css'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ChatIcon from '@mui/icons-material/Chat';
import BuisnessCenterIcon from '@mui/icons-material/BusinessCenter';
import SearchIcon from '@mui/icons-material/Search';
import HeaderOption from './HeaderOption';
import { useDispatch } from 'react-redux';
import { logout } from './features/userSlice';
import { auth } from './firebase';



function Header() {
  const dispatch = useDispatch();
  const logoutofApp = () => {
    dispatch(logout());
    auth.signOut();
  }

  return (
    <div className='header'>
        {/* <h1>This is the Header</h1> */}


        {/* header left  */}

          <div className="header__left"> 
              <LinkedInIcon className='LinkedInIcon'/>
                <div className="header__search">
                    <SearchIcon />
                    <input type="text" placeholder='Search'/>
                </div>
          </div>

                {/* header right */}
              <div className="header_right">
                      <HeaderOption Icon={HomeIcon} title='Home'/>
                      <HeaderOption Icon={SupervisorAccountIcon} title='My network'/>
                      <HeaderOption Icon={BuisnessCenterIcon} title='Jobs'/>
                      <HeaderOption Icon={ChatIcon} title='Messaging'/>
                      <HeaderOption Icon={NotificationsIcon} title='Notification'/>
                      <HeaderOption title='Avinash' onClick={logoutofApp}/>
              </div>

    </div>
  )
}

export default Header