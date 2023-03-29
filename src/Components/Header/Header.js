import React from 'react'
import "./_header.scss"
import { FaBars } from "react-icons/fa"
import {AiOutlineSearch} from "react-icons/ai"
import {MdNotifications, MdApps} from "react-icons/md"

const Header = ({sidebarOpen}) => {
  return (
    <div className="header">
      <FaBars className="header__menu" size={26} onClick={sidebarOpen}/>
      <img src="https://www.freepnglogos.com/uploads/youtube-play-red-logo-png-transparent-background-6.png" alt="youtube logo" className="header__logo" />

      <form >
        <input type="text" placeholder='Search'/>
        <button type='submit'>
          <AiOutlineSearch size={22}/>
        </button>
      </form>

      <div className="header__icons">
        <MdNotifications />
        <MdApps />
        <img src="https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png" alt="avatar image" className="avatar__image" />
      </div>
    </div>
  )
}

export default Header