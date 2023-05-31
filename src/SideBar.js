import { Avatar } from '@mui/material'
import React from 'react'
import './Sidebar.css'
function SideBar() {
    const recentItem =(topic)=>(
        <div className="sidebar__recentItem">
            <span className="sidebar__hash">#</span>
            <p>{topic}</p>
        </div>
    )

  return (
    <div className='sidebar'>
        {/* <h1>I am a SideBar</h1> */}
        <div className="sidebar__top">
            <img src="https://images.unsplash.com/photo-1506102383123-c8ef1e872756?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="error" />
            <Avatar className='sidebar__avatar'/>
            <h2>Avinash singh</h2>
            <h4>Avinash@gmail.com</h4>
        </div>


        <div className="sidebar__stats">
                    <div className="sidebar__stat">
                        <p>Who Viewed you</p>
                        <p>3546</p>
                    </div>
                    <div className="sidebar__stat">
                    <p>View on the Post</p>
                        <p>5546</p>
                    </div>
        </div>


            <div className="sidebar__bottom">
                <p>Recent</p>
                {recentItem('react js')}
                {recentItem('react js')}
                {recentItem('react js')}
                {recentItem('react js')}
                {recentItem('react js')}
                {recentItem('react js')}
                {recentItem('react js')}
            </div>

    </div>

  )
}

export default SideBar