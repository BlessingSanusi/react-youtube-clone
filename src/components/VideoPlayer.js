import React from 'react'

import{ Paper, Typography } from '@material-ui/core'

const VideoPlayer = ({video}) => {

if (!video) return <div>Your video is loading...</div>

const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`
    return (
       <React.Fragment>
           <Paper elevation={1} style={{height: '70%'}}>
            <iframe src="" frameBorder="0" height="100%" textAlign="center" width="100%" title="Video Player" src={videoSrc}></iframe>
           </Paper>

           <Paper elevation={2} style={{padding: '15px'}}>
            <Typography variant="h4">{video.snippet.title} - {video.snippet.channelTitle}</Typography>
            <Typography variant="subtitle1">{video.snippet.channelTitle}</Typography>
            <Typography variant="subtitle2">{video.snippet.description}</Typography>
           </Paper>

       </React.Fragment>
    )
}


export default  VideoPlayer