import React from 'react'

export default function Home() {
    return (
        <section className="p-10">
             <div className="flex">
                <h1 className="m-auto text-3xl">Welcome To the Object Detection with TensorFlow.js!</h1>
            </div>
            <div className="flex justify-space-between mt-10">
                <div className="w-1/4 mx-auto p-6 bg-white rounded-lg shadow-xl">
                    <img className="w-full" src="https://www.bing.com/th?id=AMMS_7cc2bb63a5caa1e1e5279a3dc06acc55&w=156&h=112&c=7&o=6&dpr=1.5&pid=SANGAM" alt="ogot clinton!" />
                    <div className="cursor-pointe decoration-solidr decoration-solid">
                    <h3 className="text-center m-2">Detect Object</h3> 
                    <p className="text-center ">In this project we use tensorflow js model to detect objects</p>
                    </div>
                </div>
                <div className="w-1/4 mx-auto p-6 bg-white rounded-lg shadow-xl">
                    <img className="w-full" src="https://www.bing.com/th?id=AMMS_7cc2bb63a5caa1e1e5279a3dc06acc55&w=156&h=112&c=7&o=6&dpr=1.5&pid=SANGAM" alt="ogot clinton!" />
                    <div className="cursor-pointer">
                    <h3 className="text-center m-2">Predict The object</h3>
                    <p className="text-center ">Localize and identify multiple objects in a single image</p>
                    </div>
                </div>
                <div className="w-1/4 mx-auto p-6 bg-white rounded-lg shadow-xl">
                    <img className="w-full" src="https://www.bing.com/th?id=AMMS_7cc2bb63a5caa1e1e5279a3dc06acc55&w=156&h=112&c=7&o=6&dpr=1.5&pid=SANGAM" alt="ogot clinton!" />
                    <div className="cursor-pointer decoration-solid">
                    <h3 className="text-center m-2">TensorFlow Js Model</h3>
                    <p className="text-center decoration-solid">Tensorflow.js can be used whithin the browser</p>
                    </div>

                </div>
            </div>
        </section>
    )
}
