import { useRef, useState } from 'react';

import styleClasses from './PlayerPanel.module.css';

import PlayerButton from "../PlayerButton/PlayerButton";
import InPlayerSongInfo from "../InPlayerSongInfo/InPlayerSongInfo";

import song from '../../../Songs/testSong.mp3';

const PlayerPanel = () => {
    const [ isPlaying, changePlayButtonState ] = useState(false);

    const audioElement = useRef(null);

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
            <InPlayerSongInfo songName="The Story of Alisher" artistName="Oxxxymiron" featsArray={["Porchy", "Anacondaz"]}/>
            <div className={styleClasses.buttonsPanel}>

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
            <audio src={song} ref={audioElement}></audio>
        </div>
    )
}

export default PlayerPanel;