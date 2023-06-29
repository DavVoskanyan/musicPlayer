import styleClasses from './Header.module.css';

const Header = (props) => {
    return (
        <header className={ styleClasses.headerContainer }>
            <h1 className={ styleClasses.textTitle }>
                <span className={ styleClasses.greetingMessage }>Missed you,</span>
                <span className={ styleClasses.userName }>{ props.userInfo.realName }</span>
            </h1>
            <img className={ styleClasses.userImage }
                 src={ `/UserImages/${props.userInfo.userImageFileName}` }
                 alt="userImage"
                 onClick={ () => props.changeUserInfoPageState( { ...props.userInfoPageState, isOpen: true } ) } />
        </header>
    )
}

export default Header;