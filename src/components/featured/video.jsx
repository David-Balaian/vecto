import React, { useEffect, useRef, useState } from 'react';
import styles from './styles.module.css';

const Video = ({url}) => {
    const [videoUrl, setVideoUrl] = useState(null)
    const intervalId = useRef(null)

    useEffect(() => {
        setVideoUrl(null)
        if(intervalId.current){
            clearTimeout(intervalId.current)
        }
    
        intervalId.current = setTimeout(()=>{
            setVideoUrl(url)
        }, 2000)

        return () => {
            if(intervalId.current){
                clearTimeout(intervalId.current)
            }
        };
    }, [url]);
    
    if(!videoUrl){
        return null
    }

    return (
        <div className={styles.videoCont} >
                <video autoPlay muted>
                    <source src={videoUrl} type="video/mp4" />
                </video>
            </div>
    );
}

export default Video;
