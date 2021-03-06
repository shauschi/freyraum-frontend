'use strict';
import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import PlayArrow from '@material-ui/icons/PlayArrow';
import Pause from '@material-ui/icons/Pause';
import ReactPlayer from 'react-player';
import './style.less';

class VideoCard extends React.Component {

  state = {
    playing: false,
  };

  play = () => {
    this.setState({playing: true});
  };

  pause = () => {
    this.setState({playing: false});
  };

  render() {
    const {title, url} = this.props;
    const {playing} = this.state;
    return (
      <Card>
        <CardActionArea onClick={playing ? this.pause : this.play}>
          <CardMedia src='iframe' style={{pointerEvents: 'none'}}>
            <ReactPlayer
              url={url}
              config={{
                youtube: {
                  playerVars: {
                    fs: 0,
                    rel: 0,
                    playsinline: 0,
                    showinfo: 0,
                    controls: 0,
                    modestbranding: 1,
                  }
                }
              }}
              playing={playing}
              playsinline
              onPause={this.pause}
              onPlay={this.play}
              onEnded={this.pause}
              width='100%'
              height='200px'/>
          </CardMedia>
        </CardActionArea>
        <CardContent style={{display: 'flex', alignItems: 'center'}}>
          {
            playing
              ? <IconButton onClick={this.play}>
                  <Pause/>
                </IconButton>
              : <IconButton>
                  <PlayArrow/>
                </IconButton>
          }
          <Typography>
            {title}
          </Typography>
        </CardContent>
      </Card>
    );
  }
}

export default VideoCard;