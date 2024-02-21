import React, { Component, createRef} from "react";
import ReactPlayer from "react-player";
import Video from "../assets/vid/videoEstadio_musica.mp4";
import Portada from "../assets/img/portada.jpg";


class Reproductor extends Component {
  
  constructor(props) {
    super(props);
    this.BotonStop = createRef();
    this.state = {
      playing: true,
      played: 0,
      loaded: 0,
      duration: 0,
    };
  }
  
  
  playPause = () => {
    this.setState({ playing: !this.state.playing });
  };
  stop = (e) => {
    this.setState({ playing: false });
    this.player.seekTo(parseFloat((e.target.value = 0)));
  
  };
  onPlay = () => {
    this.setState({ playing: true });
    this.BotonStop.current.style.visibility='visible';
  };
  onPause = () => {
    this.setState({ playing: false });
  };

  onProgress = (state) => {
    // We only want to update time slider if we are not currently seeking
    if (!this.state.seeking) {
      this.setState(state);
    }
  };
  
  ref = (player) => {
    this.player = player;
  };
  

  render() {
    const { playing, played } = this.state;
    
    return (
      <section className="reproductor">
        <div onClick={this.playPause} className="reproductor--portada">
          <img  src={Portada} alt="" />
        </div>
        <div className="player-wrapper">
          <ReactPlayer
            ref={this.ref}
            className="react-player"
            width="100%"
            height="100%"
            url={Video}
            playing={playing}
            onPlay={this.onPlay}
            onPause={this.onPause}
            onEnded={() => this.setState({ playing: false })}
            onProgress={this.onProgress}
            controls
            light = {Portada}
          />
        </div>
        <div onClick={this.stop} className="reproductor--botonStop" ref={this.BotonStop}>
          <div className="reproductor--botonStop-icon"></div>
        </div>
      </section>
    );
  }
}

export default Reproductor;
