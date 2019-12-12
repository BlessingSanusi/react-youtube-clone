import React, { Component } from "react";

import { Grid } from '@material-ui/core';

import { SearchBar, VideoList, VideoPlayer } from './components'


import youtube from './api/youtube'


class App extends Component {
  render() {
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
            <VideoPlayer />

            </Grid>
            <Grid item xs={4}>
            {/* video lists */}
            <VideoList />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default App;
