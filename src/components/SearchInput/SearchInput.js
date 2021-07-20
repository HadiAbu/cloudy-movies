import searchIcon from '../../icons/search.png';
import './SearchInput.css';
import Utils from '../../Utils/Utils';

/**
 * SearchInput component
 * @param {*} onKeyChange - function that fire when we change search keyword
 * @param {*} onYearChange - function that fire when we change year
 */
const SearchInput = ({ onKeyChange, onYearChange }) =>{
    return (
        <div className={'search-wrapper'}>
            <div className={'input-wrapper'}>
                <img className={'icon'} src={searchIcon} alt="searchIcon"/>
                <input placeholder={'Search by movie name..'} 
                className={'input'} onChange={Utils.debounce((e)=>onKeyChange(e.target.value))}/>
            </div>
            <div className={'input-wrapper'}>
                <input type={'number'} min={'1888'} max={'2021'} 
                placeholder={'Year (optional)' } className={'yearInput'} 
                onChange={Utils.debounce((e)=>onYearChange(e.target.value))}/>
            </div>
        </div>
    );
}

export default SearchInput;