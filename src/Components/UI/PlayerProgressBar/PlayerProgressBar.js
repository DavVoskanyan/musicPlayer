import styleClasses from './PlayerProgressBar.module.css';

const PlayerProgressBar = ( props ) => {

    const progressTime = props.songDuration * props.songPageState.progressBarPercent / 100;

    const durationMinutes = Math.floor( props.songDuration / 60 );
    const durationSeconds = Math.floor( props.songDuration % 60 ) < 10
        ? `0${ Math.floor( props.songDuration % 60 ) }`
        : Math.floor( props.songDuration % 60 );
    const durationParser = `${ durationMinutes }:${ durationSeconds }`;


    const currentTimeMinutes = Math.floor( progressTime / 60 );
    const currentTimeSeconds = Math.floor( progressTime % 60 ) < 10
        ? `0${ Math.floor( progressTime % 60 ) }`
        : Math.floor( progressTime % 60 );
    const currentTime = `${ 
        currentTimeMinutes ? currentTimeMinutes : 0 
    }:${ 
        currentTimeSeconds ? currentTimeSeconds : '00' }`;

    const progressBarTouchHandler = ( eventObject ) => {
        const positionX = eventObject.clientX;
        const screenWidth = window.screen.width;

        const progressBarWidth =  window.screen.width * 70 / 100;
        const progressWidth = positionX - screenWidth * 15 / 100;

        const percent = progressWidth / progressBarWidth * 100;

        props.progressBarClickHandler( percent );
    }

    return (
        <div className={ styleClasses.progressBarContainer }
             onClick={ progressBarTouchHandler } >

            <span className={ styleClasses.currentTime } >
                { currentTime }
            </span>

            <div className={ styleClasses.progressBar } >

                <div className={ styleClasses.progressBarActivePart }
                     style={ { 'width': `${ props.songPageState.progressBarPercent }%` } } />

            </div>

            <span className={ styleClasses.totalTime } >
                { durationParser }
            </span>

        </div>
    )
}

export default PlayerProgressBar;