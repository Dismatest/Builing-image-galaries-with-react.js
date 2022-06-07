import {useState} from 'react'
import "@tensorflow/tfjs"
import * as mobilenet from '@tensorflow-models/mobilenet'

const usePredictImage = () => {
const [isLoading, setisLoading] = useState(false)
const [predictions, setPredictions] = useState([])
function predict(img){
    setisLoading(true)
    mobilenet.load().then(model => {
        model.classify(img).then(prediction => {
            console.log(prediction)
            setisLoading(false)
            setPredictions(prediction)
        })
    })
}

return [predict, isLoading, predictions, setPredictions]

}

export default usePredictImage