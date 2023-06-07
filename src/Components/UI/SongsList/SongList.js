import styleClasses from './SongList.module.css';

import InListSong from '../InListSong/InListSong';
const SongList = () => {
    return (
        <div className={ styleClasses.songList }>
            <InListSong />
            <InListSong />
            <InListSong />
            <InListSong />
            <InListSong />
            <InListSong />
            <InListSong />
            <InListSong />
            <InListSong />
            <InListSong />
            <InListSong />
            <InListSong />
        </div>
    )
}

export default SongList;