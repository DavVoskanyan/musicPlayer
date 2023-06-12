import styleClasses from './AlbumForList.module.css';

import albumImage1 from '../../../Assets/albumImage1.png';
import albumImage2 from '../../../Assets/albumImage2.png';
import albumImage3 from '../../../Assets/albumImage3.png';
import albumImage4 from '../../../Assets/albumImage4.png';

const AlbumForList = (props) => {
    let image;
    if(props.number === 1) {
        image = albumImage1;
    }
    if(props.number === 2) {
        image = albumImage2;
    }
    if(props.number === 3) {
        image = albumImage3;
    }
    if(props.number === 4) {
        image = albumImage4;
    }

    let backgroundImage = { backgroundImage: `url(${image})` }

    return (
        <div style={ backgroundImage } className={styleClasses.albumForList}></div>
    )
}

export default AlbumForList;