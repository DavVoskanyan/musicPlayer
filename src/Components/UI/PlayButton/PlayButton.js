import styleClasses from './PlayButton.module.css';

const PlayButton = ( props ) => {

    const onPlayButtonClickHandler = (isPlaying, pause, play) => {
        if( isPlaying ) pause();
        else play();
    }

    return (
        <button className={
                    ` ${ styleClasses.playButton } 
                      ${ props.songPageState['isPlaying'] ? styleClasses.isPlaying : styleClasses.isPaused } `
                }
                onClick={ () => {
                    onPlayButtonClickHandler( props.songPageState['isPlaying'], props.pauseSong, props.playSong )
                } } >

            <div className={styleClasses.playLine1}></div>
            <div className={styleClasses.playLine2}></div>
            <div className={styleClasses.playLine3}></div>
            <div className={styleClasses.pauseLine1}></div>
            <div className={styleClasses.pauseLine2}></div>

        </button>
    )
}

export default PlayButton;