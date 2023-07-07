import styleClasses from './SearchField.module.css';

const SearchField = ( props ) => {

    return (
        <div className={ styleClasses.searchContainer } >

            <input type="text"
                   placeholder="song, album, artist"
                   className={ styleClasses.searchField }
                   onInput={ eventObject => props.searchInputHandler( eventObject.target[ 'value' ] ) } />

        </div>
    )

}

export default SearchField;