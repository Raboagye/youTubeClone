import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import Header from './Components/Header/Header'
import HomeScreen from './Screens/HomeScreen'
import Sidebar from './Components/Sidebar/Sidebar'
import "./_app.scss"
import LoginScreen from './Screens/LoginScreen/LoginScreen'
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux'


const Layout = ({children}) => {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  return (
    <div>
      <Header sidebarOpen={() => setSidebarOpen(!sidebarOpen)} />
      <div className="app__container">
        <Sidebar sidebar={sidebarOpen} hideNavBar={() => setSidebarOpen(false)} />
        <Container className="app__main" >
            {children}
        </Container>
      </div>

    </div>
  )
}


const App = () => {
  const navigate = useNavigate()
  
  const {accessToken, loading} = useSelector((state)=>state.user)

  useEffect(() => {
    if(!loading  && !accessToken) {
      navigate("/auth")
    }
  }, [accessToken, loading])

  return (
    <Routes>
      <Route exact path="/" element={
        <Layout>
          <HomeScreen />
        </Layout>}
      />
      <Route path="/search" element={
        <Layout>
          <h4>This is the search page</h4>
        </Layout>}
      />
      <Route path="/auth" element={<LoginScreen />} />
      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>

  )
}

export default App