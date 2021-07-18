import { data } from 'autoprefixer'
import Axios from 'axios'
import React, { useEffect, useState } from 'react'


const api = process.env.REACT_APP_UNSPLASH_API
const key = process.env.REACT_APP_UNSPLASH_KEY

export default function useFetchImages(page, serchTerm) {

    const [images, setImages] = useState([])
    const [errors, seterrors] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    function fetchSerch(){

        Axios.get(
            `${api}/search/photos?client_id=${key}&page=${page}&query=${serchTerm}`
            
            )
           
        .then(res=>{

            if (page > 1){

                setImages([...images, ...res.data.results]) 

            }else{
                setImages([...res.data.results]) 
 
            }
            
            setIsLoading(false)

        }).catch(e=>{seterrors(["Unable to fetch images, check your internet connectivity!!"])})
        setIsLoading(false)

    }
    function fetchRandom(){

        Axios.get(
            `${api}/photos?client_id=${key}&page=${page}`
            
            )
           
        .then(res=>{
            setImages([...images, ...res.data])
            setIsLoading(false)

        }).catch(e=>{seterrors(["Unable to fetch images, check your internet connectivity!!"])})
        setIsLoading(false)

    }
    

    useEffect(() => {
        setIsLoading(true)

        if (serchTerm != null){
            fetchSerch()
            
        }else{

            
            fetchRandom()

        }
        
        
    }, [page])

    useEffect(() => {
        if (serchTerm === null) return
        fetchSerch()
    }, [serchTerm])
return [images, setImages, errors, isLoading]

}
  
