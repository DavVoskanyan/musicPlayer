import styleClasses from './SongList.module.css';

import InListSong from '../InListSong/InListSong';
const SongList = (props) => {
    return (
        <div className={ styleClasses.songList }>
            <InListSong changeSongPage={ props.changeSongPage }/>
            <InListSong changeSongPage={ props.changeSongPage }/>
            <InListSong changeSongPage={ props.changeSongPage }/>
            <InListSong changeSongPage={ props.changeSongPage }/>
            <InListSong changeSongPage={ props.changeSongPage }/>
            <InListSong changeSongPage={ props.changeSongPage }/>
        </div>
    )
}

export default SongList;