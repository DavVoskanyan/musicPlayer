import styleClasses from './MainSwiper.module.css';

import SwiperSlide from '../SwiperSlide/SwiperSlide';

const MainSwiper = (props) => {
    return (
        <div className={styleClasses.swiperContainer}>
            <div className={styleClasses.slidesContainer}>
                {
                    props.shownAlbums?.map( albumObject => {
                        return <SwiperSlide key={ albumObject.albumId }
                                            albumInfo={ albumObject }
                                            songListPageState={ props.songListPageState }
                                            changeSongListPageState={ props.changeSongListPageState }/>
                    })
                }
            </div>
        </div>
    )
}

export default MainSwiper;