import styleClasses from './SongList.module.css';

import InListSong from '../InListSong/InListSong';

const SongList = ( props ) => {

    return (
        <div className={ styleClasses.songList } >
            { props.currentSongs?.map( songInfo => {

                    return (
                        <InListSong key={ songInfo.songId }
                                    withImage={ props.withImage }
                                    songInfo={ songInfo }

                                    songPageState={ props.songPageState }
                                    changeSongPageState={ props.changeSongPageState } />
                    )

                })
            }
        </div>
    )

}

export default SongList;