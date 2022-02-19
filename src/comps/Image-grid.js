import { motion } from "framer-motion";
import React from "react";
import useFireStore from "../hooks/useFireStore";

const ImageGrid = ({setSelectedImage}) => {
    const {docs} = useFireStore('images');
    return(
        <motion.div className="img-grid">
        {docs && docs.map((data) => (
            <motion.div 
            layout 
            className="imag-wrap" 
            whileHover={{ opacity: 1 }}s
            onClick={() => setSelectedImage(data.url)} >
                <motion.img alt="image" src={data.url}></motion.img>
            </motion.div>
        ))}
        
        </motion.div>
    )
}
export default ImageGrid;