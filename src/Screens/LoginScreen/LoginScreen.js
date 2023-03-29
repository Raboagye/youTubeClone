// import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { auth, provider } from '../../firebase'
import { login, login_Fail, login_Request, login_Success } from '../../Redux/userSlice'
import "./_loginScreen.scss"

const LoginScreen = () => {
    const accessToken = useSelector((state)=>state.user.accessToken)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
      if(accessToken) {
        navigate("/")
      }
    }, [accessToken])
    

    const signIn = () => {

        dispatch(login_Request())

        auth.signInWithPopup(provider)
        .then((user) => {
            dispatch(login_Success({
                accessToken: user.credential.accessToken,
            }))

            dispatch(login({
                name: user.additionalUserInfo.profile.name,
                photoUrl: user.additionalUserInfo.profile.picture
            }))
            // console.log(user)
            sessionStorage.setItem("ytc-access-token", user.credential.accessToken)
            sessionStorage.setItem("ytc-profile", JSON.stringify({
                name: user.additionalUserInfo.profile.name,
                photoUrl: user.additionalUserInfo.profile.picture
            }))
        })
        .catch((error) => {
            dispatch(login_Fail({
                error: error.message
            }))
        })
    }

  return (
      <div className="login">
          <div className="login__container">
              <img src="https://www.freepnglogos.com/uploads/youtube-play-red-logo-png-transparent-background-6.png" alt="" />
              <button onClick={signIn}>Login with Google</button>
              <p>This project is made using Youtube data API</p>

          </div>

      </div>
  )
}

export default LoginScreen