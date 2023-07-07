import styleClasses from './SwiperSlide.module.css'


const SwiperSlide = ( props ) => {

    const onAlbumClickHandler = () => {

        props.changeSongListPageState( {

            ...props.songListPageState,
            isOpen: true,
            currentAlbumInfo: props.albumInfo

        } );

    }

    return (
        <div className={ styleClasses.swiperSlide }
             onClick={ onAlbumClickHandler } >

            <img className={styleClasses.albumImage}
                 src={ `/AlbumImages/${ props.albumInfo.albumImageFileName }` }
                 alt='albumImage' />

            <div className={ styleClasses.textInfo } >

                <span className={styleClasses.albumName} >
                    { props.albumInfo.albumName }
                </span>

                <span className={styleClasses.artistName} >
                    { props.albumInfo.artist }
                </span>

            </div>

        </div>
    )
}

export default SwiperSlide;