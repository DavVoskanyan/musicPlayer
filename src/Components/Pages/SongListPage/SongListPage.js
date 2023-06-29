import styleClasses from './SongListPage.module.css';

import SongList from '../../UI/SongList/SongList';

import albumImage from '../../../Assets/albumImage2.png';

const SongListPage = (props) => {

    return (
        <div className={ `${ styleClasses.songListPage } ${ props.isOpen ? styleClasses.active : '' }` }>
            <div className={ styleClasses.emptySpace }
                 onClick={ () => { props.changeSongListPageState( { ...props.songListPageState, isOpen: false } ) } } />
            <div className={ `${ styleClasses.listContainer } ${ props.isOpen ? styleClasses.active : '' }` }>
                <div className={ styleClasses.albumInfoContainer }>
                    <img src={ albumImage } alt="" className={ styleClasses.albumImage }/>
                    <div className={ styleClasses.albumTextInfoContainer }>
                        <span className={ styleClasses.albumName }>
                            Горгород
                        </span>
                        <span className={ styleClasses.artistName }>
                            Oxxxymiron
                        </span>
                    </div>
                </div>
                <SongList withImage={ false } currentSongs={ props.currentSongs } songPageState={ props.songPageState } changeSongPageState={ props.changeSongPageState }/>
            </div>
        </div>
    )
}

export default SongListPage;