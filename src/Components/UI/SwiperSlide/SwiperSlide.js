import styleClasses from './SwiperSlide.module.css'

import albumImage from '../../../Assets/albumImage1.png';

const SwiperSlide = (props) => {
    const backgroundImageStyles = {
        "backgroundImage": `url(${ albumImage })`
    }

    return (
        <div className={ styleClasses.swiperSlide } onClick={() => props.changeSongListPage(true)}>
            <div className={styleClasses.albumImage} style={ backgroundImageStyles }/>
            <div className={ styleClasses.textInfo }>
                <span className={styleClasses.albumName}>Рубикон</span>
                <span className={styleClasses.artistName}>Drummatix</span>
            </div>
        </div>
    )
}

export default SwiperSlide;