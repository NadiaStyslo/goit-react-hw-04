// import { useState } from 'react'
import toast from 'react-hot-toast';
import css from './App.module.css';
import fetchArticles  from '../api.js'
import SearchBar  from './SearchBar/SearchBar';
import axios from 'axios';
import {useState} from 'react'
import ImageGalery from './ImageGalery/ImageGalery';


const App = () => {
    const [image, setImage] = useState([]);
    // const [loading, setLoading] = useState(false)
   const searchImages= async (query, page)=>{
       try {
            // setLoading(true)
            const response = await fetchArticles(query, page);
            setImage(prevImage =>[...prevImage, ...response.results])
        //    setLoading(false)
        } catch (error) {}
   }
    
    return(
    <div>
            <SearchBar onSearch={searchImages} />
            {image.length > 0 && <ImageGalery items={image} />}
    </div>
    )
}

export default App
