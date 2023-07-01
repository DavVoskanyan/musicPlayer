import styleClasses from './InListSong.module.css';

const InListSong = ( props ) => {

    const onSongClickHandler = () => {

        if( props.songInfo.songId === props.songPageState.currentPlayingSong?.songId ) {

            props.changeSongPageState( {
                ...props.songPageState,
                isOpen: true,
            } );

        }
        else {

            props.changeSongPageState( {
                isOpen: true,
                currentPlayingSong: props.songInfo,
                progressBarPercent: 0
            } );

        }

    }

    return (
        <div className={ styleClasses.inListSong }
             onClick={ onSongClickHandler } >

            {
                props.withImage
                    ? <img className={ styleClasses.songImage }
                           src={ `/AlbumImages/${ props.songInfo.songImage }` }
                           alt='songImage' />
                    : ''
            }

            <div className={ styleClasses.songInfo } >

                <span className={ styleClasses.songName } >
                    { props.songInfo.songName }
                </span>

                <span className={ styleClasses.songAuthor } >
                    { props.songInfo.artistName }
                </span>

            </div>

            <hr className={ styleClasses.songsSeparator } />

        </div>
    )
}

export default InListSong;