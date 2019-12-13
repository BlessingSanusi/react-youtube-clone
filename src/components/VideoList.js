import React from 'react'
import VideoItem from './VideoItem'

import { Grid } from '@material-ui/core'

// function base component is a dummy base component. It is not a smart component

const VideoList = ({videos}) => {
const listOfVideo = videos.map((video) => <VideoItem />)

    return listOfVideo;
}

export default VideoList