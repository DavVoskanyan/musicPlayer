import styleClasses from './HomePage.module.css';

import Header from '../../UI/Header/Header';
import SearchField from "../../UI/SearchField/SearchField";
import SectionTitle from "../../UI/SectionTitle/SectionTitle";
import MainSwiper from "../../UI/MainSwiper/MainSwiper";
import SongList from "../../UI/SongsList/SongList";

const HomePage = (props) => {
    return (
        <div className={`${ styleClasses.page } ${ props.isAnyPageOpen ? styleClasses.isBackground : '' }`}>
            <Header userName="Sicmundus" changeUserInfoPage={ props.changeUserInfoPage }/>
            <SearchField />
            <SectionTitle sectionTitle="top albums for you"/>
            <MainSwiper changeSongListPage={ props.changeSongListPage }/>
            <SectionTitle sectionTitle="popular songs"/>
            <SongList changeSongPage={ props.changeSongPage }/>
        </div>
    )
}

export default HomePage;
