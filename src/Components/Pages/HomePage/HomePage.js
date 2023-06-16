import styleClasses from './HomePage.module.css';

import Header from '../../UI/Header/Header';
import SearchField from "../../UI/SearchField/SearchField";
import SectionTitle from "../../UI/SectionTitle/SectionTitle";
import MainSwiper from "../../UI/MainSwiper/MainSwiper";
import SongList from "../../UI/SongsList/SongList";

const HomePage = ({changeUserInfoPage, changeSongPage}) => {
    return (
        <div className={styleClasses.page}>
            <Header userName="Sicmundus" changeUserInfoPage={changeUserInfoPage}/>
            <SearchField />
            <SectionTitle sectionTitle="top albums for you"/>
            <MainSwiper />
            <SectionTitle sectionTitle="popular songs"/>
            <SongList changeSongPage={changeSongPage}/>
        </div>
    )
}

export default HomePage;
