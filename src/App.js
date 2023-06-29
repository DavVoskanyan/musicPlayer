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
                    artistName: 'oxxxymiron',
                    songImage: 'albumImage2.png',
                    songPath: 'Oxxxy1.mp3',
                    songDuration: 0
                },
                {
                    songId: 2,
                    songName: 'кем ты стал',
                    artistName: 'oxxxymiron',
                    songImage: 'albumImage2.png',
                    songPath: 'Oxxxy2.mp3',
                    songDuration: 0
                },
                {
                    songId: 3,
                    songName: 'всего лишь писатель',
                    artistName: 'oxxxymiron',
                    songImage: 'albumImage2.png',
                    songPath: 'Oxxxy1.mp3',
                    songDuration: 0
                },

            ]
        },
        {
            albumId: 2,
            albumName: 'рубикон',
            artist: 'drummatix',
            albumImageFileName: 'albumImage5.png',
            songs: [
                {
                    songId: 4,
                    songName: 'тёмным по белому',
                    artistName: 'drummatix',
                    songImage: 'albumImage5.png',
                    songPath: 'drummatix1.mp3',
                    songDuration: 0
                },
                {
                    songId: 5,
                    songName: 'тепло',
                    artistName: 'drummatix',
                    songImage: 'albumImage5.png',
                    songPath: 'drummatix1.mp3',
                    songDuration: 0
                },
                {
                    songId: 6,
                    songName: 'успокой',
                    artistName: 'drummatix',
                    songImage: 'albumImage5.png',
                    songPath: 'drummatix1.mp3',
                    songDuration: 0
                },
                {
                    songId: 7,
                    songName: 'земля',
                    artistName: 'drummatix',
                    songImage: 'albumImage5.png',
                    songPath: 'drummatix1.mp3',
                    songDuration: 0
                },
                {
                    songId: 8,
                    songName: 'к пропасти',
                    artistName: 'drummatix',
                    songImage: 'albumImage5.png',
                    songPath: 'drummatix1.mp3',
                    songDuration: 0
                },
                {
                    songId: 9,
                    songName: 'рубикон',
                    artistName: 'drummatix',
                    songImage: 'albumImage5.png',
                    songPath: 'drummatix1.mp3',
                    songDuration: 0
                },
                {
                    songId: 10,
                    songName: 'монолит',
                    artistName: 'drummatix',
                    songImage: 'albumImage5.png',
                    songPath: 'drummatix1.mp3',
                    songDuration: 0
                },
                {
                    songId: 11,
                    songName: 'афробит',
                    artistName: 'drummatix',
                    songImage: 'albumImage5.png',
                    songPath: 'drummatix1.mp3',
                    songDuration: 0
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
            songImage: 'albumImage2.png',
            songDuration: 0
        },
        {
            songId: 2,
            songName: 'башня из слоновой кости',
            artistName: 'oxxxymiron',
            songPath: 'Oxxxy2.mp3',
            songImage: 'albumImage2.png',
            songDuration: 0
        },
        {
            songId: 3,
            songName: 'кем ты стал',
            artistName: 'oxxxymiron',
            songPath: 'Oxxxy1.mp3',
            songImage: 'albumImage2.png',
            songDuration: 0
        },
        {
            songId: 4,
            songName: 'полигон',
            artistName: 'oxxxymiron',
            songPath: 'Oxxxy2.mp3',
            songImage: 'albumImage2.png',
            songDuration: 0
        },
        {
            songId: 5,
            songName: 'слово мэра',
            artistName: 'oxxxymiron',
            songPath: 'Oxxxy1.mp3',
            songImage: 'albumImage2.png',
            songDuration: 0
        }
    ]


    const [ userInfoPageState, changeUserInfoPageState ] = useState( {
        isOpen: false,
        userInfo: userInfo,
        shownAlbums: shownAlbums,
        topSongs: topSongs,
    } );
    const [ songListPageState, changeSongListPageState ] = useState( {
        isOpen: false,
        currentAlbumInfo: null,
        currentSongs: topSongs
    } );
    const [ songPageState, changeSongPageState ] = useState( {
        isOpen: false,
        currentPlayingSong: null,
        progressBarPercent: 0,
        isPlaying: false
    } );

    const isAnyPageOpen = userInfoPageState.isOpen || songPageState.isOpen || songListPageState.isOpen;

    return (
        <div className="App" >

            <HomePage isAnyPageOpen={ isAnyPageOpen }

                      userInfoPageState={ userInfoPageState }
                      changeUserInfoPageState={ changeUserInfoPageState }

                      songListPageState={ songListPageState }
                      changeSongListPageState={ changeSongListPageState }

                      songPageState={ songPageState }
                      changeSongPageState={ changeSongPageState }

                      userInfo={ userInfo }
                      shownAlbums={ shownAlbums }
                      topSongs={ userInfoPageState.topSongs } />

            <UserInfoPage isOpen={ userInfoPageState.isOpen }

                          userInfoPageState={ userInfoPageState }
                          changeUserInfoPageState={ changeUserInfoPageState } />

            <SongListPage isOpen={ songListPageState.isOpen }

                          songListPageState={ songListPageState }
                          changeSongListPageState={ changeSongListPageState }

                          songPageState={ songPageState }
                          changeSongPageState={ changeSongPageState }

                          currentSongs={ songListPageState.currentSongs } />

            <SongFullScreen isOpen={ songPageState.isOpen }

                            songPageState={ songPageState }
                            changeSongPageState={ changeSongPageState } />

        </div>
    );
}

export default App;
