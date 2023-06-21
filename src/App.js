import './App.css';
import { useState } from 'react';

import HomePage from "./Components/Pages/HomePage/HomePage";
import SongFullScreen from "./Components/Pages/SongFullScreen/SongFullScreen";
import UserInfoPage from "./Components/Pages/UserInfoPage/UserInfoPage";
import SongListPage from "./Components/Pages/SongListPage/SongListPage";

function App() {
    const [ isUserInfoPageOpen, changeUserInfoPage ] = useState(false);
    const [ isSongListOpen, changeSongListPage ] = useState(false);
    const [ isSongPageOpen, changeSongPage ] = useState(false);

    const isAnyPageOpen = isUserInfoPageOpen || isSongPageOpen || isSongListOpen;

    return (
        <div className="App">

            <HomePage isAnyPageOpen={ isAnyPageOpen }
                      changeUserInfoPage={ changeUserInfoPage }
                      changeSongPage={ changeSongPage }
                      changeSongListPage={ changeSongListPage }/>

            <UserInfoPage isOpen={ isUserInfoPageOpen }
                          changePageState={ changeUserInfoPage } />

            <SongListPage isOpen={ isSongListOpen }
                          changeSongPage={ changeSongPage }
                          changeSongListPage={ changeSongListPage }/>

            <SongFullScreen isOpen={ isSongPageOpen }
                            changeSongPage={ changeSongPage } />

        </div>
    );
}

export default App;
