import React, { useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import CategoriesBar from '../Components/Categories/CategoriesBar'
import Video from '../Components/Video/Video'
import request from '../api'
import { useDispatch, useSelector } from 'react-redux'
import { HOME_VIDEOS_FAIL, HOME_VIDEOS_REQUEST, HOME_VIDEOS_SUCCESS } from '../Redux/apiSlice'

const HomeScreen = () => {
  const dispatch = useDispatch()
  const {videos} = useSelector((state)=> state.api)

  const api_request = () => {

    dispatch(HOME_VIDEOS_REQUEST())

    request("/videos", {
      params: {
        part: "snippet,contentDetails,statistics",
        chart: "mostPopular",
        regionCode: "GH",
        maxResults: 20
      }
    }).then((response) => {
      // console.log(response)
      dispatch(HOME_VIDEOS_SUCCESS({
        videos: response.data.items,
        nextPageToken: response.data.nextPageToken
      }))
    })
    .catch((error) => {
      dispatch(HOME_VIDEOS_FAIL({
        error: error.message
      }))
    })
  }

  useEffect(()=> {
    api_request()
  }, [])
  

  return (
    <Container>
      <CategoriesBar />
      <Row>
        {videos.map((video) => (
          <Col lg={3} md={4}>
            <Video video={video} key={video.id}/>
          </Col>
        ))}
      </Row>

    </Container>
  )
}

export default HomeScreen