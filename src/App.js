import Menu from './components/menu';
import Feature from './components/featured';
import Trandings from './components/trending';
import styles from './App.module.css';
import { useState } from 'react';
import data from './utils/data.json';

const {Featured, TendingNow} = data;
const trendings = TendingNow.sort((a,b)=>Date.parse(a.Date) - Date.parse(b.Date))
const sessionFeatureds = sessionStorage.getItem('featureds')

if(!sessionFeatureds){
  sessionStorage.setItem('featureds', JSON.stringify(trendings.map(item=>item.Id)))
}else{
  let ids = JSON.parse(sessionFeatureds)
  trendings.sort((a, b) => ids.indexOf(a.Id) - ids.indexOf(b.Id));
}


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
