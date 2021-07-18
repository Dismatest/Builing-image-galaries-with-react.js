import React, { useState, useRef } from 'react'
import "@tensorflow/tfjs"
import * as mobilenet from '@tensorflow-models/mobilenet'


export default function Prediction() {
    const imageRef = useRef()
    const [isLoading, setisLoading] = useState(false)
    const [predictions, setPredictions] = useState([])

    function predictimage(){
    const img = imageRef.current
        setisLoading(true)
        mobilenet.load().then(model => {
            model.classify(img).then(predictions => {
                setisLoading(false)
                setPredictions(predictions)
            })
        })
    }
    
    return (
        <div className="flex justify-center">
            <div className="w-1/3">
            <h1 className="text-center">welcome to the model image classification with javascript</h1>
            <img ref={imageRef} crossOrigin="anonymous" src="" width="300"/>
            <div className="text-center my-5">
                {/* {
                    predictions.length > 0 && (predictions.map((predict) => {
                        <div className="flex justify-between">
                        <p>{predict.className}</p>
                        <p>{Math.floor(predict.probality*100)} % </p>
                        </div>
                    }))
                } */}
            <button onClicke={predictimage} className="p-2 rounded bg-blue-800 text-white w-64">
                {
                    isLoading ? <i className="fas fa-circle-notch fa-spin"></i>
                    :
                    "Prediction the image"
                }
               
                </button>

            </div>
            </div>
        </div>
    )
}
