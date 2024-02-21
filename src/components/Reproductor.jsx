
//Se importan Hooks Necesarios
import React, { Component, createRef} from "react";
//Se importa React Player
import ReactPlayer from "react-player";
// Se importa imagen y video
import Video from "../assets/vid/videoEstadio_musica.mp4";
import Portada from "../assets/img/portada.jpg";
import PortadaRepeat from "../assets/img/imgRepeat.png";


class Reproductor extends Component {
  
  //Se crea constructor con parámetros necesarios para poder manipular las funciones de React Player
  constructor(props) {
    super(props);
    this.BotonStop = createRef();
    this.PortadaRepeat = createRef();
    this.PlayerWrapper = createRef();

    this.state = {
      playing: true,
      played: 0,
      loaded: 0,
      duration: 0,
    };
  }
  
  //Función para poner Stop
  stop = (e) => {
    this.setState({ playing: false });
    this.player.seekTo(parseFloat((e.target.value = 0)));
    this.PortadaRepeat.current.style.display='block';
    this.PlayerWrapper.current.style.display='none';
    this.BotonStop.current.style.visibility='hidden';
  
  //Función para definir que sucede mientras el video se está reproduciendo
  };
  onPlay = () => {
    this.setState({ playing: true });
    this.BotonStop.current.style.visibility='visible';  
    this.PortadaRepeat.current.style.display='none';
    this.PlayerWrapper.current.style.display='block';
  };

  //Función para definir que sucede si el video está en pausa
  onPause = () => {
    this.setState({ playing: false });
  };

  ref = (player) => {
    this.player = player;
  };
  
//Se carga el reproductor de React Player
  render() {
    const { playing } = this.state;
    
    return (
      <section className="reproductor">
        <div className="reproductor--portadaRepeat" ref={this.PortadaRepeat} onClick={this.onPlay}>
          <img src={PortadaRepeat} alt="Imagen de portada para repetir el video" />
          <div className="reproductor--portadaRepeat-block"></div>
        </div>
        <div className="player-wrapper" ref={this.PlayerWrapper}>
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
