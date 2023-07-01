import styleClasses from './InPlayerSongInfo.module.css';

const InPlayerSongInfo = ( props ) => {

    const featuringArtists = props.featsArray.length
        ? `feat ${props.featsArray.join(' ')}`
        : '';

    return (
        <div className={ styleClasses.songInfoContainer } >

            <span className={ styleClasses.songName } >
                { props.songName }
            </span>

            <span className={ styleClasses.artistName } >
                { props.artistName } { featuringArtists }
            </span>

        </div>
    )
}

export default InPlayerSongInfo;