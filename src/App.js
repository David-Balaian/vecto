import Menu from './components/menu';
import Feature from './components/featured';
import Trandings from './components/trending';
import styles from './App.module.css';
import { useState } from 'react';
import { startUp } from './utils/startUp';

const {Featured, trendings} = startUp()


function App() {
  const [activeMenu, setactiveMenu] = useState(0);
  const [activeFeatured, setactiveFeatured] = useState(Featured);

  return (
    <div className={styles.layout}>
      <Menu activeMenu={activeMenu} setactiveMenu={setactiveMenu}/>
      <div className={styles.content}>
        <Feature info={activeFeatured} />
        <Trandings trendings={trendings} setactiveFeatured={setactiveFeatured} />
      </div>
    </div>
  );
}

export default App;
