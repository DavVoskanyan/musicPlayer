import styleClasses from "./UserCard.module.css"

import arrowIcon from '../../../Assets/Icons/arrowLeft.svg';
const UserCard = (props) => {

    return (
        <div className={styleClasses.userCard}>
            <button className={styleClasses.goBackButton} onClick={() => props.changeUserInfoPageState( { ...props.userInfoPageState, isOpen: false } ) }>
                <img className={styleClasses.backIcon} src={arrowIcon} alt=""/>
            </button>

            <img className={styleClasses.userImageContainer}
                 src={ `/UserImages/${props.userInfo.userImageFileName}` }
                 alt="" />

            <div className={styleClasses.userNameContainer}>
                <span className={styleClasses.userName}>{ props.userInfo.realName }</span>
                <span className={styleClasses.userNick}>{ props.userInfo.nickName }</span>
            </div>
        </div>
    );
}

export default UserCard;