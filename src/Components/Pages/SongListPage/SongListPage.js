import styleClasses from './SongListPage.module.css';

import SongsList from '../../UI/SongsList/SongList';

import albumImage from '../../../Assets/albumImage2.png';

const SongListPage = (props) => {

    return (
        <div className={ `${ styleClasses.songListPage } ${ props.isOpen ? styleClasses.active : '' }` }>
            <div className={ styleClasses.emptySpace } onClick={ () => { props.changeSongListPage(false) } }></div>
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
                <SongsList changeSongPage={ props.changeSongPage }/>
            </div>
        </div>
    )
}

export default SongListPage;