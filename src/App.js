import './App.css';
import { useState } from 'react';

import HomePage from "./Components/Pages/HomePage/HomePage";
import SongFullScreen from "./Components/UI/SongFullScreen/SongFullScreen";
import UserInfoPage from "./Components/Pages/UserInfoPage/UserInfoPage";

function App() {
    const [ isUserInfoPageOpen, changeUserInfoPage ] = useState(false);
    const [ isSongPageOpen, changeSongPage ] = useState(true);

    return (
        <div className="App">
            <HomePage changeUserInfoPage={changeUserInfoPage} changeSongPage={changeSongPage}/>
            <UserInfoPage isOpen={isUserInfoPageOpen} changePageState={changeUserInfoPage} />
            <SongFullScreen isOpen={isSongPageOpen} changeSongPage={changeSongPage} />
        </div>
    );
}

export default App;
