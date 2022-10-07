import data from './data.json';

export const startUp = () => {
    const {Featured, TendingNow} = data;
    const trendings = TendingNow.sort((a,b)=>Date.parse(a.Date) - Date.parse(b.Date))
    const sessionFeatureds = sessionStorage.getItem('featureds')

    if(!sessionFeatureds){
        sessionStorage.setItem('featureds', JSON.stringify(trendings.map(item=>item.Id)))
    }else{
        let ids = JSON.parse(sessionFeatureds)
        trendings.sort((a, b) => ids.indexOf(a.Id) - ids.indexOf(b.Id));
    }

    return {trendings, Featured}
}