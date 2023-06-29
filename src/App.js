import './App.css';
import { useState } from 'react';

import HomePage from "./Components/Pages/HomePage/HomePage";
import SongFullScreen from "./Components/Pages/SongFullScreen/SongFullScreen";
import UserInfoPage from "./Components/Pages/UserInfoPage/UserInfoPage";
import SongListPage from "./Components/Pages/SongListPage/SongListPage";

function App() {
    const userInfo = {
        realName: 'David Voskanyan',
        nickName: 'sicmundus',
        userImageFileName: 'userImage.jpeg'
    }

    const shownAlbums = [
        {
            albumId: 1,
            albumName: 'горгород',
            artist: 'oxxxymiron',
            albumImageFileName: 'albumImage2.png',
            songs: [
                {
                    songId: 1,
                    songName: 'не сначала',
                    songPath: ''
                },
                {
                    songId: 2,
                    songName: 'кем ты стал',
                    songPath: ''
                },
                {
                    songId: 3,
                    songName: 'всего лишь писатель',
                    songPath: ''
                },

            ]
        },
        {
            albumId: 2,
            albumName: 'рубикон',
            artist: 'drummatix',
            albumImageFileName: 'albumImage1.png',
            songs: [
                {
                    songId: 4,
                    songName: 'тёмным по белому',
                    songPath: ''
                },
                {
                    songId: 5,
                    songName: 'тепло',
                    songPath: ''
                },
                {
                    songId: 6,
                    songName: 'успокой',
                    songPath: ''
                },
                {
                    songId: 7,
                    songName: 'земля',
                    songPath: ''
                },
                {
                    songId: 8,
                    songName: 'к пропасти',
                    songPath: ''
                },
                {
                    songId: 9,
                    songName: 'рубикон',
                    songPath: ''
                },
                {
                    songId: 10,
                    songName: 'монолит',
                    songPath: ''
                },
                {
                    songId: 11,
                    songName: 'афробит',
                    songPath: ''
                },

            ]
        },
    ]

    const topSongs = [
        {
            songId: 1,
            songName: 'где нас нет',
            artistName: 'oxxxymiron',
            songPath: 'Oxxxy1.mp3',
            songImage: 'albumImage2.png'
        },
        {
            songId: 2,
            songName: 'башня из слоновой кости',
            artistName: 'oxxxymiron',
            songPath: 'Oxxxy2.mp3',
            songImage: 'albumImage2.png'
        },
        {
            songId: 3,
            songName: 'кем ты стал',
            artistName: 'oxxxymiron',
            songPath: 'Oxxxy1.mp3',
            songImage: 'albumImage2.png'
        },
        {
            songId: 4,
            songName: 'полигон',
            artistName: 'oxxxymiron',
            songPath: 'Oxxxy2.mp3',
            songImage: 'albumImage2.png'
        },
        {
            songId: 5,
            songName: 'слово мэра',
            artistName: 'oxxxymiron',
            songPath: 'Oxxxy1.mp3',
            songImage: 'albumImage2.png'
        }
    ]


    const [ userInfoPageState, changeUserInfoPageState ] = useState( {
        isOpen: false,
        shownAlbums: shownAlbums,
        topSongs: topSongs,
    } );
    const [ songListPageState, changeSongListPageState ] = useState( {
        isOpen: false,
        currentSongs: topSongs
    } );
    const [ songPageState, changeSongPageState ] = useState( {
        isOpen: false,
        currentPlayingSong: {
            songId: 1,
            songName: 'где нас нет',
            artistName: 'oxxxymiron',
            songPath: 'Oxxxy1.mp3',
            songImage: 'albumImage2.png'
        },
        progressBarPercent: 0,
        isPlaying: false
    } );

    const isAnyPageOpen = userInfoPageState.isOpen || songPageState.isOpen || songListPageState.isOpen;

    return (
        <div className="App">

            <HomePage isAnyPageOpen={ isAnyPageOpen }

                      userInfoPageState={ userInfoPageState }
                      changeUserInfoPageState={ changeUserInfoPageState }

                      songListPageState={ songListPageState }
                      changeSongListPageState={ changeSongListPageState }

                      songPageState={ songPageState }
                      changeSongPageState={ changeSongPageState }

                      userInfo={ userInfo }
                      shownAlbums={ userInfoPageState.shownAlbums }
                      topSongs={ userInfoPageState.topSongs } />

            <UserInfoPage isOpen={ userInfoPageState.isOpen }

                          userInfoPageState={ userInfoPageState }
                          changeUserInfoPageState={ changeUserInfoPageState }

                          userInfo={ userInfo } />

            <SongListPage isOpen={ songListPageState.isOpen }

                          songListPageState={ songListPageState }
                          changeSongListPageState={ changeSongListPageState }

                          songPageState={ songPageState }
                          changeSongPageState={ changeSongPageState }

                          currentSongs={ songListPageState.currentSongs } />

            <SongFullScreen isOpen={ songPageState.isOpen }

                            songPageState={ songPageState }
                            changeSongPageState={ changeSongPageState }/>

        </div>
    );
}

export default App;
