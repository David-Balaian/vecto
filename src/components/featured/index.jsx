import moment from 'moment/moment';
import React from 'react';
import styles from './styles.module.css';
import Video from './video';

const Index = ({info}) => {

    return (
        <div className={styles.featured} style={{backgroundImage: `url("${process.env.PUBLIC_URL}/assets/${info.CoverImage}")`}}>
            <Video url={info.VideoUrl && `${info.VideoUrl}?${info.Id}`}/>
            <div className={styles.content} >
                <span>Movie</span>
                <img className={styles.titleImg} alt={info.TitleImage} src={`${process.env.PUBLIC_URL}/assets/${info.TitleImage}`}/>
                <span>{`${info.ReleaseYear} ${info.MpaRating}  ${moment.duration(info.Duration, 'seconds').humanize()}`}</span>
                <span>{info.Description}</span>
            </div>
        </div>
    );
}

export default Index;
