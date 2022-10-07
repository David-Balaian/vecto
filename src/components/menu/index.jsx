import React from 'react';
import styles from './styles.module.css';
import cx from 'classnames';

const Index = ({activeMenu}) => {
    
    const menuBtns = [
        {icon: 'assets/icons/Group 46.png', label: 'Home'}, 
        {icon: 'assets/icons/Group 56.png', label: 'TV Shows'}, 
        {icon: 'assets/icons/Group 54.png', label: 'Movies'}, 
        {icon: 'assets/icons/Group 53.png', label: 'Genres'}, 
        {icon: 'assets/icons/Group 47.png', label: 'Watch Later'} 
    ]

    const downBtns = [
        {label: 'Language'},
        {label: 'get help'},
        {label: 'Exit'},
    ]

    return (
        <div className={styles.menu}>
            <div className={styles.first}>
                <div className={styles.profileInfo}>
                    <img alt='logo192' className={cx('avatar', styles.icon)} src='/logo192.png' />
                    <span className={styles.label}> Daniel </span>
                </div>
                <input className={styles.search} placeholder='Search' />
                {menuBtns.map(({icon, label}, i)=>(
                    <div key={label} >
                        <button className={cx(styles.menuBtn, {[styles.menuBtnActive]: activeMenu === i})}>
                            <img alt={label} className={styles.icon} key={label} height={20} src={`${process.env.PUBLIC_URL}/${icon}`} />
                            <span className={styles.label}>{label}</span>
                        </button>
                    </div>
                ))}
            </div>
            <div className={styles.second}>
                {downBtns.map(item => (
                    <div className={styles.downItems} key={item.label}>{item.label}</div>
                ))}
            </div>
        </div>
    );
}

export default Index;
