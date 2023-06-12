import styleClasses from './SwiperSlide.module.css'

import albumImage from '../../../Assets/albumImage1.png';

const SwiperSlide = () => {
    const backgroundImageStyles = {
        "backgroundImage": `url(${ albumImage })`
    }

    return (
        <div className={ styleClasses.swiperSlide }>
            <div className={styleClasses.albumImage} style={ backgroundImageStyles }/>
            <div className={ styleClasses.textInfo }>
                <span className={styleClasses.albumName}>Рубикон</span>
                <span className={styleClasses.artistName}>Drummatix</span>
            </div>
        </div>
    )
}

export default SwiperSlide;