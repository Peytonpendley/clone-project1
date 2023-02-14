import React from 'react'
import './SearchPage.css'
import { useStateValue } from '../components/StateProvider'
import useGoogleSearch from '../components/UseGoogleSearch';
import Response from '../response'
import { Link } from 'react-router-dom';
import Search   from './Search.js';
import './Search.css'

function SearchPage(){
    const [{ term }, dispatch] = useStateValue();
    //const { data } = useGoogleSearch(term); <- this is a live api call

    const data = Response;

    console.log(data)

    return(
        <div className='searchPage'>
            <div className='searchPage__header'>
                <Link to='/'>
                    <img className='searchPage__logo' src='https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png' alt=''></img>
                </Link>
                <div className='searchPage__headerBody'>
                    <Search className='search__buttonsHidden'/>
                </div>
            </div>
            <div className='searchPage_results'></div>
        </div>
    )
}

export default SearchPage;