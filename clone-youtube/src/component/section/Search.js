import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

const Search = () => {
    const [searchKeyword, setSearchKeyword] = useState('');
    const navigate = useNavigate();

    const handleSearch = () => {
        console.log(searchKeyword)
        if (searchKeyword) {
            navigate(`/search/${searchKeyword}`);
        }
    };

    const handleInputChange = (e) => {
        setSearchKeyword(e.target.value);
    };

    const handleInputKeyDown = (e) => {
        if (e.key === 'Enter' && searchKeyword) {
            handleSearch();
        }
    };

    return (
        <div id='search'>
            <Link to="/">
                <div className="youtube-logo"></div>
            </Link>
            <div className='search__inner'>
                <label htmlFor='searchInput'>
                    <span className='ir'>검색</span>
                </label>
                <input 
                    type='search' 
                    id='searchInput' 
                    placeholder='검색어를 입력해주세요' 
                    autoComplete='off' 
                    className='search__input' 
                    value={searchKeyword}
                    onChange={handleInputChange}
                    onKeyDown={handleInputKeyDown}
                />
            </div>
        </div>
    )
}

export default Search
