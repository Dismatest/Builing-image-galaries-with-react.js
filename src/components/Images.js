import React, {useState} from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import useFetchImages from '../utils/hooks/useFetchImages'
import Loading from './Loading'
import SingleImage from './SingleImage'
import useDebounce from '../utils/hooks/useDebounce'
import { AnimateSharedLayout } from 'framer-motion'


function Images() {

    function ImagesComponent(){
        return <AnimateSharedLayout>
            <InfiniteScroll dataLength={images.length} next={()=>setpage(page + 1)} hasMore={true}> {images.map((img, index) => <SingleImage image={img.urls.regular} handleRemove={handleRemove} index={index} key={index}/>)} </InfiniteScroll>
           </AnimateSharedLayout>
    }

    const [page, setpage] = useState(1)
    const [serchTerm, setserchTerm] = useState(null)
    const [images, setImages, errors, isLoading] = useFetchImages(page, serchTerm)
    
    function handleRemove(index){
      
       setImages(images.filter((image, i) => i !== index))
    }
    
    const debounce = useDebounce()

    function handleInput(e){
        const text = e.target.value
        debounce(()=> setserchTerm(text))
    }
    if(isLoading) 
    return < Loading />
        
    return (
    <section className="p-10">
       <div className="my-5">
           <input onChange={handleInput} type="text" className="w-full border shadow p-2" placeholder="Serch Photos here"/>
       </div>
        <div className="gap-0" style={{columnCount:3}}>
            {errors.length > 0 && 
            (
            <div className="flex h-screen">
                <p className="m-auto">{errors[0]}
                </p>
            </div>
            )
            }
            <ImagesComponent />
            </div>
            
        </section>
        
    )
}

export default Images