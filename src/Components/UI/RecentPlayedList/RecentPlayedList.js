import stylesClasses from './RecentPlayedList.module.css';

import SectionTitle from "../SectionTitle/SectionTitle";
import AlbumForList from "../AlbumForList/AlbumForList";

const RecentPlayedList = () => {
    let gridStyle1 = { gridRow: '1 / span 3', borderBottomRightRadius: '15px'};
    let gridStyle2 = { gridRow: '1 / span 2', borderBottomLeftRadius: '15px' };
    let gridStyle3 = { gridRow: '4 / span 2', borderTopRightRadius: '15px' };
    let gridStyle4 = { gridRow: '3 / span 3', borderTopLeftRadius: '15px' };

    return (
        <div className={stylesClasses.recentPlayedList}>
            <SectionTitle sectionTitle="Recently Played"/>
            <div className={stylesClasses.albumsGrid}>
                <div className={stylesClasses.albumElementHolder} style={ gridStyle1 }>
                    <AlbumForList number={3}/>
                </div>
                <div style={ gridStyle2 }>
                    <AlbumForList number={4}/>
                </div>
                <div style={ gridStyle3 }>
                    <AlbumForList number={1}/>
                </div>
                <div style={ gridStyle4 }>
                    <AlbumForList number={2}/>
                </div>
            </div>
        </div>
    )
}

export default RecentPlayedList;