import styleClasses from './MainSwiper.module.css';

import SwiperSlide from '../SwiperSlide/SwiperSlide';

const MainSwiper = () => {
    return (
        <div className={styleClasses.swiperContainer}>
            <div className={styleClasses.slidesContainer}>
                <SwiperSlide/>
                <SwiperSlide/>
                <SwiperSlide/>
            </div>
        </div>
    )
}

export default MainSwiper;