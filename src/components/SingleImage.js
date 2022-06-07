
import React, { useRef, useState }from 'react'
import usePredictImage from '../utils/hooks/usePredictImage'

export default function SingleImage({index, handleRemove, image}) {

    const [handleHover, sethandleHover] = useState(false)
    const [showPreview, setShowPreview] = useState(false)
    const imageRef = useRef()

    const [predict, isLoading, predictions, setPredictions] = usePredictImage()

    return (
        <div>
            <div className="p-1 m-1 border flex justify-center">
                    <div className="relative" onMouseEnter={()=> sethandleHover(true)} onMouseLeave={()=>sethandleHover(false)}>
                        {
                            (predictions.length > 0 || isLoading) && 
                            <span className="absolute bg-red-500 text-white rounded-lg shadow px-2 ml-10" onClick={()=>setPredictions([])}>
                                {isLoading && <p className="p-3">Please Wait, Fetching Predictions ....</p>}
                                {
                                predictions.map((prediction)=>(
                                    <div className="flex justify-between p-3">
                                    <p>{prediction.className}</p>
                                    <p>{Math.floor(prediction.probability*100)} %</p>
                                    </div>
                                ))
                            }
                            </span>
                        }
                    <i className={`fas fa-times absolute right-0 cursor-pointer opacity-25 hover:opacity-100 text-2xl p-3 ${handleHover ? "" : "hidden"}`} onClick={()=> handleRemove(index)}></i>
                    <i className={`fas fa-search absolute left-0 cursor-pointer opacity-25 hover:opacity-100 text-2xl p-3 ${handleHover ? "" : "hidden"}`} onClick={()=> predict(imageRef.current)}></i>
                    <img onClick={()=>setShowPreview(true)} src={image} width="100%" alt="Preview" ref={imageRef}crossOrigin="anonymous"/>

                    </div>
                
                </div>
                {/* <AnimatePresence> */}
                {
                    showPreview && 

                    <section className="flex justify-center fixed h-full w-full items-center top-0 left-0 z-40" onClick={() => setShowPreview(false)}>
                        <div className="bg-white">
                        <img className="rounded" src={image} width="500" height="400" alt="Preview"/>
                        </div>
                        </section>
                }
                {/* </AnimatePresence>  */}
            </div>
                
                
    )
}
