import React from 'react';

import { Grid, Paper, Typography} from '@material-ui/core'

const VideoItem = ({video}) => {
    return (
        <Grid item xs={12}>
            <Paper style={{display: 'flex', alignItems: 'center'}}>
            <img src={video.snippet.thumbnails.medium.url} style={{marginRight: '20px'}} alt="thumbnail"/>
            <Typography variant="subtitle1">
                <b>{video.snippet.title}</b>
            </Typography>
            </Paper>
        </Grid>
    )
}

export default VideoItem