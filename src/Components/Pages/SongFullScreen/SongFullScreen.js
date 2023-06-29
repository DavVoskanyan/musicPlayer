import styleClasses from './SongFullScreen.module.css'

import chevronDownIcon from '../../../Assets/Icons/chevronDownIcon.svg';

import PlayerPanel from "../../UI/PlayerPanel/PlayerPanel";

const SongFullScreen = ( props ) => {

    const songImageSrc = `/AlbumImages/${ props.songPageState.currentPlayingSong?.songImage }`;
    const backgroundImageStyle = {
        backgroundImage: `url( ${ songImageSrc } )`
    }

    return (
        <div style={ backgroundImageStyle }
             className={`${ styleClasses.songBackgroundContainer } ${ props.isOpen ? styleClasses.active : '' }` } >

            <div className={ styleClasses.songForegroundContainer} >

                <button className={styleClasses.goBackButton}
                        onClick={ () => { props.changeSongPageState( { ...props.songPageState, isOpen: false } ); } } >

                    <img className={styleClasses.chevronDownIcon}
                         src={chevronDownIcon}
                         alt="chevronIcon" />

                </button>

                <img className={ styleClasses.songImage }
                     src={ songImageSrc }
                     alt="songImage"/>

                <PlayerPanel songPageState={ props.songPageState }
                             changeSongPageState={ props.changeSongPageState }/>

            </div>

        </div>
    )
}

export default SongFullScreen;