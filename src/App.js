import React, { Component } from "react";

import { Grid } from '@material-ui/core';

import { SearchBar, VideoList, VideoPlayer } from './components'


import youtube from './api/youtube'


class App extends Component {
state = {
  videos: [],
  selectedVideo: null,
}

componentDidMount(){
  this.handleSubmit('javascript crash course')
}

handleSubmit = async (searchTerm) =>{
const res = await youtube.get('search',{
  params: {
    part: 'snippet',
    maxResults: 7,
    key: 'AIzaSyAmIVcsu9puT0LFlmlv35Mv7rZ5ktcqw94',
    q: searchTerm
}
});
console.log(res.data.items);


this.setState({
  videos: res.data.items,
  selectedVideo: res.data.items[0]
});
}


onVideoClick = (video) => {
  this.setState({
    selectedVideo: video
  })
  };

  render() {
const { selectedVideo, videos } = this.state;

    return (
      <Grid justify="center" container spacing={16}>
        <Grid item xs={12}>
          <Grid container spacing={16}>
            <Grid item xs={12}>
            {/* search bar */}
              <SearchBar onFormSubmit={this.handleSubmit}/>

            </Grid>
    
            <Grid item xs={8}>
            {/* video player */}
            <VideoPlayer video ={selectedVideo}/>

            </Grid>
            <Grid item xs={4}>
            {/* video lists */}
            <VideoList videos={videos} onVideoClick={this.onVideoClick}/>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default App;
