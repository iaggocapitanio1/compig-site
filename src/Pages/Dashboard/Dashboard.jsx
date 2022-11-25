import {React, useState, useEffect} from "react";
import {CounterCard, ClockCard, GTACard, DeviationCard }from "./components/Cards";
import Featured from "../../components/Featured/Featured";
import Chart from "../../components/Chart/Chart";
import {useDataProvider} from 'react-admin';
import './dashboard.scss'
import {INITIAL_ACCOUNT} from '../../initialStates'

const styles = {
    flex: { display: 'flex' },
    flexColumn: { display: 'flex', flexDirection: 'column' },
    leftCol: { flex: 3, marginRight: '0.5em' },
    rightCol: { flex: 1, marginLeft: '0.5em' },
    singleCol: { marginTop: '1em', marginBottom: '1em' },
    panels: {gap:'1em', marginTop: '1em', display: 'flex', flexDirection: 'row'}
};



const Dashboard = () => {
    // const token = decodeJwt(localStorage.getItem("access"));
    // const user_id = token.user_id
    
    const dataProvider = useDataProvider();
    const [account, setAccount] = useState(INITIAL_ACCOUNT)

    useEffect(()=>{
        const promise = dataProvider.getAccount('account');
        promise.then(response => response.json).then( account => 
            setAccount(account)
        )

    }, [])

    return (
    <div className="dashboard" style={styles.flex}>
       <div className="leftCol" style={styles.leftCol}>
        <div className="panelsContainer" style={styles.panels}>
        <CounterCard className="counterCard" value={account.total_gta}/>
        <ClockCard className="clockCard" value={account.total_duration_in_hours}/>
        <GTACard  className="gtaCard" value={account.total_gta}/>
        <DeviationCard className="deviationCard" value={account.total_deviation}/>
        </div>
        <div className="infoContainer">
        <Featured/>
        <Chart/>
        </div>
        
        
       </div>
       <div className="rightCol" style={styles.rightCol}>

       </div>
    </div>)


};

export default Dashboard;