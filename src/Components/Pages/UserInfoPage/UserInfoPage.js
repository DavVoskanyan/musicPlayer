import styleClasses from './UserInfoPage.module.css';

import UserCard from "../../UI/UserCard/UserCard";
import RecentPlayedList from "../../UI/RecentPlayedList/RecentPlayedList";

const UserInfoPage = (props) => {
    return (
        <div className={`${styleClasses.userInfoPage} ${props.isOpen ? styleClasses.active : ''}`}>
            <UserCard userInfo={ props.userInfo }
                      userInfoPageState={ props.userInfoPageState }
                      changeUserInfoPageState={ props.changeUserInfoPageState }/>
            <RecentPlayedList />
        </div>
    )
}

export default UserInfoPage;