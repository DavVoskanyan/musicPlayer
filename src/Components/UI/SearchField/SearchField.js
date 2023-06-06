import styleClasses from './SearchField.module.css';

const SearchField = () => {
    return (
        <div className={styleClasses.searchContainer}>
            <input type="text" placeholder="search" className={styleClasses.searchField}/>
        </div>
    )
}

export default SearchField;