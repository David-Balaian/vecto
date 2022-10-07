import React from 'react';
import Card from './card';
import styles from './styles.module.css';

const Index = ({trendings, setactiveFeatured}) => {

    const handleChange = (item) => {
        let sessionFeatureds = JSON.parse(sessionStorage.getItem('featureds'))
        if(sessionFeatureds){
            const ind = sessionFeatureds.indexOf(item.Id)
            if(ind > -1){
                sessionFeatureds.splice(ind, 1)
            }
            sessionFeatureds.unshift(item.Id)

        }else{
            sessionFeatureds = [item.Id]
        }
        sessionStorage.setItem('featureds', JSON.stringify(sessionFeatureds))
        setactiveFeatured(item)
    }

    return (
        <div className={styles.trending}>
            {trendings.map(item => <Card key={item.Id} handleChange={handleChange} card={item}/>)}
        </div>
    );
}

export default Index;
