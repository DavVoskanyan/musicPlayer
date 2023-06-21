import styleClasses from './InListSong.module.css';

import songImage from "../../../Assets/albumImage1.png";
const InListSong = ( props) => {
    const backgroundImageStyles = {
        "backgroundImage": `url(${ songImage })`
    }

    return (
        <div className={ styleClasses.inListSong } onClick={ () => { props.changeSongPage(true) } }>
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