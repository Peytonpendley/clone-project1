import React from 'react'
import './SearchPage.css'
import { useStateValue } from '../components/StateProvider'
import useGoogleSearch from '../components/UseGoogleSearch';
import Response from '../response'
import { Link } from 'react-router-dom';
import Search   from './Search.js';
import './Search.css'
import SearchIcon from '@mui/icons-material/Search';
import ArticleIcon from '@mui/icons-material/Article';
import ImageIcon from '@mui/icons-material/Image';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import RoomIcon from '@mui/icons-material/Room';
import MoreVertIcon from '@mui/icons-material/MoreVert';

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
                    <div className='searchPage__options'>
                        <div className='searchPage__optionsLeft'>
                            <div className='searchPage__option'>
                                <SearchIcon/>
                                <Link to='/all'>All</Link>
                            </div>
                            <div className='searchPage__option'>
                                <ArticleIcon/>
                                <Link to='/news'>News</Link>
                            </div>
                            <div className='searchPage__option'>
                                <ImageIcon/>
                                <Link to='/images'>Images</Link>
                            </div>
                            <div className='searchPage__option'>
                                <LocalOfferIcon/>
                                <Link to='/shopping'>Shopping</Link>
                            </div>
                            <div className='searchPage__option'>
                                <RoomIcon/>
                                <Link to='/maps'>Maps</Link>
                            </div>
                            <div className='searchPage__option'>
                                <MoreVertIcon/>
                                <Link to='/more'>More</Link>
                            </div>
                        </div>
                        <div className='searchPage__optionsRight'>
                            <div className='searchPage__option'>
                                <Link to='/settings'>Settings</Link>
                            </div>
                            <div className='searchPage__option'>
                                <Link to='/tools'>Tools</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {term && (
                <div className='searchPage_results'>
                    <p className='searchPage__resultCount'>
                        About { data?.searchInformation.totalResults } 3000000 results 
                        ({data?.searchInformation.formattedSearchTime} seconds) { term }
                    </p>
                    {data?.items.map(item => (
                        <div className='searchPage__result'>
                            <a href={item.link}>
                                {item.displayLink}
                            </a>
                            <a className='searchPage__resultTitle' href={item.link}>
                                <h2>{item.title}</h2>
                            </a>
                            <p className='searchPage__resultSnippet'>{item.snippet}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default SearchPage;