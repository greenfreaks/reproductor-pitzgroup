import React, { Component } from 'react';
import ReactPlayer from 'react-player';
import Video from '../assets/vid/videoEstadio_musica.mp4'


class Reproductor extends Component {
    constructor(props) {
        super(props);

        this.state = {
            url: 'https://vimeo.com/915015222?share=copy',
            playing: true,
            played: 0,
            loaded: 0,
            duration: 0,
        }
    }

    load = url => {
        this.setState({
            url,
            played: 0,
            loaded: 0
        })
    }
    playPause = () => {
        this.setState({ playing: !this.state.playing })
    }
    stop = (e) => {
        this.setState({playing: false})
        this.player.seekTo(parseFloat(e.target.value=0))
    }
    onPlay = () => {
        this.setState({ playing: true })
    }
    onPause = () => {
        this.setState({ playing: false })
    }
    onSeekChange = e => {
        this.setState({ played: parseFloat(e.target.value) })
    }
    onSeekMouseUp = e => {
        this.setState({ seeking: false })
        this.player.seekTo(parseFloat(e.target.value))
    }
    onProgress = state => {
        // We only want to update time slider if we are not currently seeking
        if (!this.state.seeking) {
            this.setState(state)
        }
    }
  
    ref = player => {
        this.player = player
    }

    render() {
        const {
            url, playing, 
            played,

          } = this.state
        return (
            <div className='play'>
                <section className='col-md-8'>
                    <h1>ReactPlayer Demo</h1>
                    <div className='player-wrapper'>
                        <ReactPlayer
                            ref={this.ref}
                            className='react-player'
                            width='100%'
                            height='100%'
                            url={url}
                            playing={playing}
                            onPlay={this.onPlay}
                            onPause={this.onPause}
                            onEnded={() => this.setState({ playing: false })}
                            onProgress={this.onProgress}
                        />
                    </div>

                    <table><tbody>
                        <tr>
                            <th>Controls</th>
                            <td>
                                <button onClick={this.stop}>Stop</button>
                                <button onClick={this.playPause}>{playing ? 'Pause' : 'Play'}</button>
                            </td>
                        </tr>
                        <tr>
                            <th>Seek</th>
                            <td>
                                <input
                                    type='range' min={0} max={1} step='any'
                                    value={played}
                                    onMouseDown={this.onSeekMouseDown}
                                    onChange={this.onSeekChange}
                                    onMouseUp={this.onSeekMouseUp}
                                />
                            </td>
                        </tr>

                    
                    </tbody></table>
                </section>
            </div>
        );
    }
}

export default Reproductor;