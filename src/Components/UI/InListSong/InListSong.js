import styleClasses from './InListSong.module.css';

const InListSong = ( props ) => {

    const onSongClickHandler = () => {
        props.changeSongPageState( {
            isOpen: true,
            currentPlayingSong: props.songInfo,
            progressBarPercent: 0
        } )
    }

    return (
        <div className={ styleClasses.inListSong } onClick={ onSongClickHandler }>
            {
                props.withImage
                    ? <img src={ `/AlbumImages/${ props.songInfo.songImage }` } alt='songImage' className={ styleClasses.songImage }/>
                    : ''
            }
            <div className={ styleClasses.songInfo }>
                <span className={ styleClasses.songName }>{ props.songInfo.songName }</span>
                <span className={ styleClasses.songAuthor }>{ props.songInfo.artistName }</span>
            </div>
            <hr className={ styleClasses.songsSeparator }/>
        </div>
    )
}

export default InListSong;