import { useRef } from 'react';

import styleClasses from './PlayerPanel.module.css';

import PlayerProgressBar from '../PlayerProgressBar/PlayerProgressBar';
import PlayerButton from "../PlayerButton/PlayerButton";
import PlayButton from "../PlayButton/PlayButton";
import InPlayerSongInfo from "../InPlayerSongInfo/InPlayerSongInfo";


const PlayerPanel = ( props ) => {

    const audioElement = useRef( null );
    const setSongDuration = () => {

        props.changeSongPageState( {

            ...props.songPageState,
            currentPlayingSong: {

                ...props.songPageState.currentPlayingSong,
                songDuration: audioElement.current.duration

            }

        } );

    }
    const timeUpdateHandler = () => {
        const progressPercent = audioElement.current.currentTime / audioElement.current.duration * 100;
        props.changeSongPageState( { ...props.songPageState, progressBarPercent: progressPercent  } );
    }
    const progressBarClickHandler = ( percent ) => {
        audioElement.current.currentTime = audioElement.current.duration * percent / 100;
    }

    const previousSong = () => {
        const currentSongId = props.songPageState.currentPlayingSong['songId'];
        const songsList = props.songPageState.currentPlayingAlbum;

        for(let i = 0; i < songsList.length; i++) {
            if(songsList[i]['songId'] === currentSongId) {
                props.changeSongPageState( {
                    ...props.songPageState,
                    isPlaying: true,
                    currentPlayingSong: songsList.at(i - 1)
                } );
                break;
            }
        }
    };
    const playSong = () => {
        audioElement.current.play();
        props.changeSongPageState( { ...props.songPageState, isPlaying: true } );
    }
    const pauseSong = () => {
        audioElement.current.pause();
        props.changeSongPageState( { ...props.songPageState, isPlaying: false } );
    }
    const nextSong = () => {
        const currentSongId = props.songPageState.currentPlayingSong['songId'];
        const songsList = props.songPageState.currentPlayingAlbum;

        for(let i = 0; i < songsList.length; i++) {
            if(songsList[i]['songId'] === currentSongId) {
                props.changeSongPageState( {
                    ...props.songPageState,
                    isPlaying: true,
                    currentPlayingSong: songsList[ (i + 1) % songsList.length ]
                } );
                break;
            }
        }
    };

    return (
        <div className={ styleClasses.playerPanel } >

            <audio src={ `/Audio/${ props.songPageState.currentPlayingSong?.songPath }` }
                   ref={ audioElement }
                   onTimeUpdate={ timeUpdateHandler }
                   onCanPlay={ () => {
                       if(props.songPageState.isOpen) {
                           setSongDuration();
                           playSong();
                       }
                       setSongDuration();
                   } } />

            <InPlayerSongInfo songName={ props.songPageState.currentPlayingSong?.songName }
                              artistName={ props.songPageState.currentPlayingSong?.artist }
                              featsArray={ [ ] } />

            <div className={styleClasses.buttonsPanel} >

                <PlayerProgressBar progressValue={ props.progressValue }
                                   changeProgress={ props.changeProgress }

                                   songPageState={ props.songPageState }
                                   changeSongPageState={ props.changeSongPageState }

                                   songDuration={ props.songPageState.currentPlayingSong?.songDuration }
                                   timeUpdateHandler={ timeUpdateHandler }
                                   progressBarClickHandler={ progressBarClickHandler } />

                <PlayerButton buttonType="previous"
                              buttonClickHandler={ previousSong } />

                <PlayButton songPageState={ props.songPageState }

                            pauseSong={ pauseSong }
                            playSong={ playSong } />

                <PlayerButton buttonType="next"
                              buttonClickHandler={ nextSong } />

            </div>

        </div>
    )
}

export default PlayerPanel;