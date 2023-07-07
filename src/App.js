import './App.css';
import { useState, useEffect, useRef } from 'react';

import { getHomePageAlbums, getHomePageSongs, getBySearch } from './informer';

import HomePage from "./Components/Pages/HomePage/HomePage";
import SongFullScreen from "./Components/Pages/SongFullScreen/SongFullScreen";
import UserInfoPage from "./Components/Pages/UserInfoPage/UserInfoPage";
import SongListPage from "./Components/Pages/SongListPage/SongListPage";

 function App() {
    const userInfo = {
        realName: 'David Voskanyan',
        nickName: 'sicmundus',
        userImageFileName: 'userImage.jpeg'
    };

    let initAlbumsInfo = useRef([]);
    let initSongsInfo = useRef([]);

    const [ homePageState, changeHomePageState ] = useState( {
        currentAlbums: [],
        currentSongs: []
    } )
    const [ userInfoPageState, changeUserInfoPageState ] = useState( {
        isOpen: false,
        userInfo: userInfo,
    } );
    const [ songListPageState, changeSongListPageState ] = useState( {
        isOpen: false,
        currentAlbumInfo: null,
        currentSongs: []
    } );
    const [ songPageState, changeSongPageState ] = useState( {
        isOpen: false,
        currentPlayingSong: null,
        progressBarPercent: 0,
        isPlaying: false
    } );

     useEffect( () => {
         ( async () => {
             const [ albums, songs ] = await Promise.all( [
                 await getHomePageAlbums(),
                 await getHomePageSongs()
             ] )

             initAlbumsInfo.current = albums;
             initSongsInfo.current = songs;
             changeHomePageState( { ...homePageState, currentAlbums: albums, currentSongs: songs } );
         } )();

     }, [ ] )

    const isAnyPageOpen = userInfoPageState.isOpen || songPageState.isOpen || songListPageState.isOpen;


const searchInputHandler = searchText => {

    if( searchText.trim() ) {
        getBySearch()
            .then( data => {
                changeHomePageState( {
                    ...homePageState,
                    currentAlbums: data[ 'albumsInfo' ],
                    currentSongs: data[ 'songsInfo' ]
                } );
            } )
    }
    else {
        changeHomePageState( {
            ...homePageState,
            currentAlbums: initAlbumsInfo.current,
            currentSongs: initSongsInfo.current
        } )
    }
}




    return (
        <div className="App" >
            <style>
                { `
                body {
                        overflow: ${ isAnyPageOpen ? 'hidden' : 'auto' };
                    } 
                ` }
            </style>
            <HomePage isAnyPageOpen={ isAnyPageOpen }

                      homePageState={ homePageState }
                      changeHomePageState={ changeHomePageState }

                      userInfoPageState={ userInfoPageState }
                      changeUserInfoPageState={ changeUserInfoPageState }

                      songListPageState={ songListPageState }
                      changeSongListPageState={ changeSongListPageState }

                      songPageState={ songPageState }
                      changeSongPageState={ changeSongPageState }

                      userInfo={ userInfo }

                      searchInputHandler={ searchInputHandler } />

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
