import styleClasses from './HomePage.module.css';

import Header from '../../UI/Header/Header';
import SearchField from "../../UI/SearchField/SearchField";
import SectionTitle from "../../UI/SectionTitle/SectionTitle";
import MainSwiper from "../../UI/MainSwiper/MainSwiper";

const HomePage = () => {
    return (
        <div className={styleClasses.page}>
            <Header userName="Sicmundus"/>
            <SearchField />
            <SectionTitle sectionTitle="top albums for you"/>
            <MainSwiper />
            <SectionTitle sectionTitle="popular songs"/>
        </div>
    )
}

export default HomePage;
