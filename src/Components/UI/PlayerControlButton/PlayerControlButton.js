import styleClasses from './PlayerControlButton.module.css';

const PlayerButtonControl = (props) => {
    return (
        <button className={styleClasses.playerButton}>
            <img className={styleClasses.inButtonIcon} src={props.icon} alt=""/>
        </button>
    )
}

export default PlayerButtonControl;