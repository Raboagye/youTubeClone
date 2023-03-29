import React, { useEffect, useState } from 'react'
import "./_video.scss"
import { AiFillEye } from 'react-icons/ai'
import request from '../../api'
import moment from 'moment/moment'
import numeral from 'numeral'

const Video = ({video}) => {

  const [views, setViews] = useState(null)
  const [duration, setDuration] = useState(null)

  const seconds = moment.duration(duration).asSeconds()
  const _duration = moment.utc(seconds * 1000).format("mm:ss")
  const [channelIcon, setChannelIcon] = useState(null)
  
  const { id, 
    snippet: { 
      publishedAt, 
      channelId, 
      title, 
      channelTitle, 
      thumbnails: { medium, 
      } 
    }, 
  } = video

  useEffect(()=> {
    request("/videos", {
      params:{
        part: "contentDetails, statistics",
        id : id?.videoId||id
      }
    }).then((response) => {
      setDuration(response.data.items[0].contentDetails.duration)
      setViews(response.data.items[0].statistics.viewCount)
    })
  }, [id?.videoId||id])

  useEffect(()=> {
    request("/channels", {
      params:{
        part: "snippet",
        id : channelId,
      }
    }).then((response) => {
      console.log(response)
      setChannelIcon(response.data.items[0].snippet.thumbnails.default.url)
    })
  }, [channelId])


  return (
    <div className="video">
      <div className="video__top">
        <img
          src={medium.url}
          alt=""
        />
        <span>{_duration}</span>
      </div>
      <div className="video__title">
        {title}
      </div>
      <div className="video__details">
        <span>
          <AiFillEye/>{numeral(views).format("0.a")} views •
        </span>
        <span> {moment(publishedAt).fromNow()}</span>
      </div>
      <div className="video__channel">
        <img src={channelIcon} alt="" />
        <p>{channelTitle}</p>
      </div>
    </div>
  )
}

export default Video