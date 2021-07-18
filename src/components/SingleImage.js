import { AnimatePresence, motion } from 'framer-motion'
import React, { useState }from 'react'

export default function SingleImage({index, handleRemove, image}) {

    const [handleHover, sethandleHover] = useState(false)
    const [showPreview, setShowPreview] = useState(false)

    return (
        <div>
            <div className="p-1 m-1 border flex justify-center">
                    <div className="relative" onMouseEnter={()=> sethandleHover(true)} onMouseLeave={()=>sethandleHover(false)}>
                    <i className={`fas fa-times absolute right-0 cursor-pointer opacity-25 hover:opacity-100 ${handleHover ? "" : "hidden"}`} onClick={()=> handleRemove(index)}></i>
                    <img onClicke={()=>setShowPreview(true)} src={image} width="100%"/>

                    </div>
                
                </div>
                <AnimatePresence>
                {
                    showPreview && 

                    <motion.section className="flex justify-center fixed h-full w-full items-center top-0 left-0 z-40" onClick={() => setShowPreview(false)}>
                        exit={{ opacity: 0 }}
                        <div className="bg-white">
                        <img className="rounded" onClicke={()=>setShowPreview(true)} src={image} width="300"/>                        </div>
                        </motion.section>
                }
                </AnimatePresence> 
            </div>
                
                
    )
}
