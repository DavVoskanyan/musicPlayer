import styleClasses from './SongList.module.css';

import InListSong from '../InListSong/InListSong';

const SongList = ( props ) => {

    const songsArray = props.currentSongs ? props.currentSongs : props.albumInfo?.songs;

    return (
        <div className={ styleClasses.songList } >
            {
                songsArray?.map( songInfo => {
                    const artistName = songInfo.artistName ? songInfo.artistName : props.albumInfo?.artist;
                    const songImage = songInfo.songImage ? songInfo.songImage : props.albumInfo?.albumImageFileName;

                    return (
                        <InListSong key={ songInfo.songId }
                                    withImage={ props.withImage }
                                    songInfo={ {
                                        ...songInfo,
                                        artistName: artistName,
                                        songImage: songImage
                        } }

                                    songPageState={ props.songPageState }
                                    changeSongPageState={ props.changeSongPageState } />
                    )

                })
            }
        </div>
    )

}

export default SongList;