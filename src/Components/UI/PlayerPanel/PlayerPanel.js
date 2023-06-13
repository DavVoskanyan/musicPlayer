import styleClasses from './PlayerPanel.module.css';

import backwardStepIcon from '../../../Assets/Icons/backwardStepIcon.svg';
import playIcon from '../../../Assets/Icons/playIcon.svg';
import forwardStepIcon from '../../../Assets/Icons/forwardStepIcon.svg';

import PlayerButtonControl from "../PlayerControlButton/PlayerControlButton";
import InPlayerSongInfo from "../InPlayerSongInfo/InPlayerSongInfo";

const PlayerPanel = () => {
    return (
        <div className={styleClasses.playerPanel}>
            <InPlayerSongInfo songName="The Story of Alisher" artistName="Oxxxymiron" featsArray={["Porchy", "Anacondaz"]}/>
            <div className={styleClasses.buttonsPanel}>
                <PlayerButtonControl icon={backwardStepIcon}/>
                <PlayerButtonControl icon={playIcon}/>
                <PlayerButtonControl icon={forwardStepIcon}/>
            </div>
        </div>
    )
}

export default PlayerPanel;