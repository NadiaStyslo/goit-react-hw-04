// import { useState } from 'react'
import  { Toaster } from 'react-hot-toast';
import css from './App.module.css';
import fetchArticles  from '../api.js'
import SearchBar  from './SearchBar/SearchBar';
import axios from 'axios';
import {useState, useEffect} from 'react'
import ImageGalery from './ImageGalery/ImageGalery';
import Loader from './Loader/Loader';
import ErrorMessage from './ErrorMessage/ErrorMessage.jsx';
import LoadMoreBtn from './LoadMoreBtn/LoadMoreBtn.jsx';


const App = () => {
    const [query, setQuery] = useState('');
    const [page, setPage] = useState(1);
    const [image, setImage] = useState([]);
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(false)
    const [loadBtn, setBtn] = useState(false)

    const searchImages = async newQuery => {
setQuery(`${Date.now()}/${newQuery}`);
    setPage(1);
    setImage([]);
    }

    const handleLoadMore = () => {
        setPage (page+1)
    }
    useEffect(() => {
        if (query === '') {
            return
        }
        async function fetchData() {
              try {
           setError(false)
                  setLoading(true)
                
                  const response = await fetchArticles(query.split('/')[1], page);
                
                  setBtn(response.total_pages !== page)
            setImage(prevImage =>[...prevImage, ...response.results])
           setLoading(false)
       } catch (error) {
           setError(true)
       }
       finally {
               setLoading(false);
        
       }
         }
        fetchData()
    }, [query, page]);

    
 
    
    return(
    <div>
            <SearchBar onSearch={searchImages} />
            {error && <ErrorMessage/>}
            {image.length > 0 && <ImageGalery items={image} />}
            {loading && <Loader />}
            {loadBtn && !loading &&<LoadMoreBtn onClick={handleLoadMore} />}
            <Toaster></Toaster>
    </div>
    )
}

export default App
