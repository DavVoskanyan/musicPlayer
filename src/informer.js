
//method for getting albums for homePage
export const getHomePageAlbums = async () => {
     return await fetch( '/appInitialFetchTest.json' )
        .then( jsonData => jsonData.json() )
        .then( data => data[ 'albumsInfo' ] )
}

//method for getting songs for homePage
export const getHomePageSongs = async () => {
    return await fetch( '/appInitialFetchTest.json' )
        .then( jsonData => jsonData.json() )
        .then( data => data['songsInfo'] );
}

//method for getting albums and song by search
export const getBySearch = async () => {
    return await fetch( '/searchBarTest.json' )
        .then( jsonData => jsonData.json() )
}