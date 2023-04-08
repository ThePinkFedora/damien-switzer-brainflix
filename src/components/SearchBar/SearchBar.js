import './SearchBar.scss';
import searchIcon from '../../assets/images/search.svg';

/**
 * Search field for searching the site.
 */
function SearchBar(){
    return (
        <div className="search-bar">
            <img className="search-bar__icon" src={searchIcon} alt="search"/>
            <input className="search-bar__field" type="search" placeholder="Search"/>
        </div>
    );
}

export default SearchBar;