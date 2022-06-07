import React, { useRef } from 'react'
import usePredictImage from "../utils/hooks/usePredictImage"



export default function Prediction() {
    const imageRef = useRef()

    const [predict, isLoading, predictions] = usePredictImage()
    
    return (
        <div className="flex justify-center">
            <div className="w-1/3">
            <h1 className="text-center">Predict Image</h1>
            <img ref={imageRef} crossOrigin="anonymous" src="https://images.unsplash.com/photo-1648737966968-5f50e6bf9e46?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxODMxNTh8MXwxfGFsbHwxfHx8fHx8Mnx8MTY1MzE2MjIxOQ&ixlib=rb-1.2.1&q=80&w=1080" width="500" alt="Preview"/>
            <div className="text-center my-5">
                {
                    predictions.length > 0  && (predictions.map((predict) => (
                        <div className="flex justify-between">
                        <p>{predict.className}</p>
                        <p>{Math.floor(predict.probability*100)} % </p>
                        </div>
                    )))
                }
                
            <button onClick={()=>predict(imageRef.current)} className="p-2 rounded bg-blue-800 text-white w-64">
                {
                    isLoading ? <i className="fas fa-circle-notch fa-spin"></i>
                    :
                    "Prediction the image"
                }

                {/* {
                    isLoading && <i className="fas fa-circle-notch fa-spin"></i>
                    
                }
                {
                    !isLoading && "Prediction the image"
                } */}
               
                </button>

            </div>
            </div>
        </div>
    )
}
