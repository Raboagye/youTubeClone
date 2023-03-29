import React from 'react'
import "./_sidebar.scss"

import {
  MdSubscriptions,
  MdExitToApp,
  MdThumbUp,
  MdHistory,
  MdLibraryBooks,
  MdHome,
  MdSentimentDissatisfied,
} from "react-icons/md"
import { auth } from '../../firebase'
import { useDispatch } from 'react-redux'
import { logout } from '../../Redux/userSlice'


const Sidebar = ({sidebar, hideNavBar}) => {
  
  const dispatch = useDispatch()

  const signOut = () => {
    auth.signOut()
    dispatch(logout())
    

    sessionStorage.removeItem("ytc-access-token")
    sessionStorage.removeItem("ytc-profile")
  }

  return (
    <nav className={sidebar? "sidebar open": "sidebar"} onClick={hideNavBar}>
      <li onClick={hideNavBar}>
        <MdHome size={23}/>
        <span>Home</span>
      </li>
      <li onClick={hideNavBar}>
        <MdSubscriptions size={23}/>
        <span>Subscriptions</span>
      </li>
      <li onClick={hideNavBar}>
        <MdThumbUp size={23}/>
        <span>Liked Videos</span>
      </li>
      <li onClick={hideNavBar}>
        <MdHistory size={23}/>
        <span>History</span>
      </li>
      <li onClick={hideNavBar}>
        <MdLibraryBooks size={23}/>
        <span>Library</span>
      </li>
      <li onClick={hideNavBar}>
        <MdSentimentDissatisfied size={23}/>
        <span>I don't know</span>
      </li>
      <hr />
      <li onClick={signOut}>
        <MdExitToApp size={23}/>
        <span>Log Out</span>
      </li>
      <hr />
    </nav>
  )
}

export default Sidebar