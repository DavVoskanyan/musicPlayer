import styleClasses from './HomePage.module.css';

import Header from '../../UI/Header/Header';
import SearchField from "../../UI/SearchField/SearchField";
import SectionTitle from "../../UI/SectionTitle/SectionTitle";
import MainSwiper from "../../UI/MainSwiper/MainSwiper";
import SongList from "../../UI/SongList/SongList";

const HomePage = ( props ) => {
    return (
        <div className={ `${ styleClasses.page } ${ props.isAnyPageOpen ? styleClasses.isBackground : '' } ` } >

            <Header userInfo={ props.userInfo }
                    userInfoPageState={ props.userInfoPageState }
                    changeUserInfoPageState={ props.changeUserInfoPageState } />

            <SearchField searchInputHandler={ props.searchInputHandler }/>

            <SectionTitle sectionTitle="top albums" />

            <MainSwiper shownAlbums={ props.homePageState.currentAlbums }

                        songListPageState={ props.songListPageState }
                        changeSongListPageState={ props.changeSongListPageState } />

            <SectionTitle sectionTitle="popular songs" />

            <SongList withImage={ true }
                      currentSongs={ props.homePageState.currentSongs }

                      songPageState={ props.songPageState }
                      changeSongPageState={ props.changeSongPageState } />
        </div>
    )
}

export default HomePage;
