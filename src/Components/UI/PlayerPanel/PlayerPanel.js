import { useRef, useState } from 'react';

import styleClasses from './PlayerPanel.module.css';

import PlayerProgressBar from '../PlayerProgressBar/PlayerProgressBar';
import PlayerButton from "../PlayerButton/PlayerButton";
import InPlayerSongInfo from "../InPlayerSongInfo/InPlayerSongInfo";

import song from '../../../Songs/testSong.mp3';

const PlayerPanel = (props) => {
    const [ isPlaying, changePlayButtonState ] = useState(false);

    const audioElement = useRef(null);

    const timeUpdateHandler = () => {
        const progressPercent = audioElement.current.currentTime / audioElement.current.duration * 100;
        props.changeProgress(progressPercent);
    }
    const progressBarClickHandler = (percent) => {
        audioElement.current.currentTime = audioElement.current.duration * percent / 100;
    }

    const previousSong = () => console.log('prev');
    const playSong = () => {
        audioElement.current.play();
        changePlayButtonState(true);
    }
    const pauseSong = () => {
        audioElement.current.pause();
        changePlayButtonState(false);
    }
    const nextSong = () => console.log('next');

    return (
        <div className={ styleClasses.playerPanel }>
            <audio src={ song }
                   ref={ audioElement }
                   onTimeUpdate={ timeUpdateHandler }/>

            <InPlayerSongInfo songName="The Story of Alisher" artistName="Oxxxymiron" featsArray={["Porchy", "Anacondaz"]}/>
            <div className={styleClasses.buttonsPanel}>

                <PlayerProgressBar progressValue={ props.progressValue }
                                   songDuration={ audioElement.current.duration }
                                   changeProgress={ props.changeProgress }
                                   timeUpdateHandler={ timeUpdateHandler }
                                   progressBarClickHandler={ progressBarClickHandler }/>

                <PlayerButton
                    buttonType="previous"
                    buttonClickHandler={ previousSong } />

                <PlayerButton
                    buttonType={isPlaying ? "pause" : "play"}
                    buttonClickHandler={ isPlaying ? pauseSong : playSong } />

                <PlayerButton
                    buttonType="next"
                    buttonClickHandler={ nextSong } />

            </div>
        </div>
    )
}

export default PlayerPanel;