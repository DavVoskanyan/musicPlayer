import styleClasses from './PlayerButton.module.css';

import backwardStepIcon from '../../../Assets/Icons/backwardStepIcon.svg';
import playIcon from '../../../Assets/Icons/playIcon.svg';
import pauseIcon from '../../../Assets/Icons/pauseIcon.svg'
import forwardStepIcon from '../../../Assets/Icons/forwardStepIcon.svg';

const PlayerButton = (props) => {
    let buttonIcon;

    if(props.buttonType === "previous") buttonIcon = backwardStepIcon;
    if(props.buttonType === "play") buttonIcon = playIcon;
    if(props.buttonType === "pause") buttonIcon = pauseIcon;
    if(props.buttonType === "next") buttonIcon = forwardStepIcon;

    return (
        <button className={styleClasses.playerButton} onClick={ props.buttonClickHandler }>
            <img className={styleClasses.inButtonIcon} src={ buttonIcon } alt=""/>
        </button>
    )
}

export default PlayerButton;