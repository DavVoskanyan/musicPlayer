import styleClasses from './SwiperSlide.module.css'


const SwiperSlide = (props) => {
    const backgroundImageStyles = {
        "backgroundImage": `url(/AlbumImages/${ props.albumInfo.albumImageFileName })`
    }

    const onAlbumClickHandler = () => props.changeSongListPageState( { ...props.songListPageState, isOpen: true } );

    return (
        <div className={ styleClasses.swiperSlide } onClick={ onAlbumClickHandler } >
            <div className={styleClasses.albumImage} style={ backgroundImageStyles } />
            <div className={ styleClasses.textInfo }>
                <span className={styleClasses.albumName}>{ props.albumInfo.albumName }</span>
                <span className={styleClasses.artistName}>{ props.albumInfo.artist }</span>
            </div>
        </div>
    )
}

export default SwiperSlide;