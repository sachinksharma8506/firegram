import React from "react";
import useStorage from '../hooks/useFileStorage'
import {motion} from 'framer-motion'
const ProgressBar = ({file, setFile}) => {
    const {progress , url} = useStorage(file, setFile);
    return (
        <motion.div className="progress-bar" initial={{ width: 0 }}
        animate={{ width: progress + '%' }}></motion.div>
    )
}

export default ProgressBar;