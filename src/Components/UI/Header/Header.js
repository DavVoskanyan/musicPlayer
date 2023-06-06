import styleClasses from './Header.module.css';


import userImage from '../../../Assets/userImage.jpeg';

const Header = (props) => {
    return (
        <header className={styleClasses.headerContainer}>
            <h1 className={styleClasses.textTitle}>
                <span className={styleClasses.greetingMessage}>Missed you,</span>
                <span className={styleClasses.userName}>{ props.userName }</span>
            </h1>
            <img className={styleClasses.userImage} src={userImage} alt=""/>
        </header>
    )
}

export default Header;