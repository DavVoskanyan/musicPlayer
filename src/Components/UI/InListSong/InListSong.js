import styleClasses from './InListSong.module.css';

import songImage from "../../../Assets/albumImage.png";
const InListSong = () => {
    const backgroundImageStyles = {
        "backgroundImage": `url(${ songImage })`
    }

    return (
        <div className={ styleClasses.inListSong }>
            <div className={ styleClasses.songImage } style={ backgroundImageStyles }/>
            <div className={ styleClasses.songInfo }>
                <span className={ styleClasses.songName }>Ma</span>
                <span className={ styleClasses.songAuthor }>Drummatix</span>
            </div>
            <hr className={ styleClasses.songsSeparator }/>
        </div>
    )
}

export default InListSong;