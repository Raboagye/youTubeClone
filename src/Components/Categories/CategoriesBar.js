import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import request from '../../api'
import { HOME_VIDEOS_FAIL, HOME_VIDEOS_REQUEST, HOME_VIDEOS_SUCCESS, SEARCH_VIDEOS } from '../../Redux/apiSlice'
import "./_categoriesBar.scss"

const keywords = [
  "All",
  "React js",
  "Angular js",
  "React Native",
  "Use of API",
  "Redux",
  "Music",
  "Algorithm Art",
  "Guitar",
  "Bengali Songs",
  "Coding",
  "Cricket",
  "Football",
  "Real Madrid",
  "Gatsby",
  "Poor Coder",
  "Shwetabh",
]


const CategoriesBar = () => {
  const page = useSelector((state)=>state.api.nextPageToken)

  const dispatch = useDispatch()

  const [activeElement, setActiveElement] = useState("All")

  const api_request = (keyword) => {
    

    // dispatch(HOME_VIDEOS_REQUEST())

    request("/search", {
      params: {
        part: 'snippet',
        maxResults: 20,
        q: keyword,
        type: 'video',
        pageToken: page
      }
    }).then((response) => {
      console.log(response)
      dispatch(SEARCH_VIDEOS({
        videos: response.data.items,
        nextPageToken: response.data.nextPageToken
      }))
    })
  //   .catch((error) => {
  //     dispatch(HOME_VIDEOS_FAIL({
  //       error: error.message
  //     }))
  //   })
  }

  const handleSubmit = (keyword) => {
    api_request(keyword)
    setActiveElement(keyword)
  }

  // useEffect(()=> {
    
  // }, [])

  return (
    <div className='categories'>
      {keywords.map((value, i) => (
        <span key={i} onClick={()=>handleSubmit(value) } className={activeElement==value? "active" : ""}>{value}</span>
      ))}

    </div>
  )
}

export default CategoriesBar