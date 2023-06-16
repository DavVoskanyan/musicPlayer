import styleClasses from './SongFullScreen.module.css'

import albumImage from '../../../Assets/albumImage2.png';
import chevronDownIcon from '../../../Assets/Icons/chevronDownIcon.svg';

import PlayerPanel from "../PlayerPanel/PlayerPanel";
const SongFullScreen = (props) => {

    return (
        <div style={{backgroundImage: `url(${ albumImage })`}}
             className={`${styleClasses.songBackgroundContainer} ${props.isOpen ? styleClasses.active : ''}` }>
            <div className={styleClasses.songForegroundContainer}>
                <button className={styleClasses.goBackButton} onClick={ () => { props.changeSongPage(false); } }>
                    <img className={styleClasses.chevronDownIcon} src={chevronDownIcon} alt=""/>
                </button>
                <img className={styleClasses.songImage} src={albumImage} alt=""/>
                <PlayerPanel />
            </div>
        </div>
    )
}

export default SongFullScreen;