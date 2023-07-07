import styleClasses from './SongListPage.module.css';

import SongList from '../../UI/SongList/SongList';


const SongListPage = ( props ) => {

    return (
        <div className={ `${ styleClasses.songListPage } ${ props.isOpen ? styleClasses.active : '' }` } >

            <div className={ styleClasses.emptySpace }
                 onClick={ () => { props.changeSongListPageState( { ...props.songListPageState, isOpen: false } ) } } />

            <div className={ `${ styleClasses.listContainer } ${ props.isOpen ? styleClasses.active : '' }` } >

                <div className={ styleClasses.albumInfoContainer } >

                    <img className={ styleClasses.albumImage }
                         src={ `/AlbumImages/${ props.songListPageState.currentAlbumInfo?.albumImageFileName }` }
                         alt="albumImage" />

                    <div className={ styleClasses.albumTextInfoContainer } >

                        <span className={ styleClasses.albumName } >
                            { props.songListPageState.currentAlbumInfo?.albumName }
                        </span>

                        <span className={ styleClasses.artistName } >
                            { props.songListPageState.currentAlbumInfo?.artist }
                        </span>

                    </div>

                </div>

                <SongList withImage={ false }
                          albumInfo={ props.songListPageState.currentAlbumInfo }

                          songPageState={ props.songPageState }
                          changeSongPageState={ props.changeSongPageState }/>

            </div>

        </div>
    )
}

export default SongListPage;