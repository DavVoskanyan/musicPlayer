import styleClasses from "./UserCard.module.css"

import userImage from '../../../Assets/userImage.jpeg';
import arrowIcon from '../../../Assets/Icons/arrowLeft.svg';
const UserCard = () => {
    const backgroundStyleObject = {
        'backgroundImage': `url(${userImage})`
    }

    return (
        <div className={styleClasses.userCard}>
            <button className={styleClasses.goBackButton}>
                <img className={styleClasses.backIcon} src={arrowIcon} alt=""/>
            </button>
            <div style={backgroundStyleObject} className={styleClasses.userImageContainer}></div>
            <div className={styleClasses.userNameContainer}>
                <span className={styleClasses.userName}>David Voskanyan</span>
                <span className={styleClasses.userNick}>sicmundus</span>
            </div>
        </div>
    );
}

export default UserCard;