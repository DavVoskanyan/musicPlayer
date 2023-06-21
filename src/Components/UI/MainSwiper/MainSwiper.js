import styleClasses from './MainSwiper.module.css';

import SwiperSlide from '../SwiperSlide/SwiperSlide';

const MainSwiper = (props) => {
    return (
        <div className={styleClasses.swiperContainer}>
            <div className={styleClasses.slidesContainer}>
                <SwiperSlide changeSongListPage={props.changeSongListPage}/>
                <SwiperSlide changeSongListPage={props.changeSongListPage}/>
                <SwiperSlide changeSongListPage={props.changeSongListPage}/>
            </div>
        </div>
    )
}

export default MainSwiper;