import axios from 'axios';
import React, {useEffect, useState} from 'react';
 
const Bird1 = () => {
    const [Data, setData]=useState({
        Thing:'',
        
    })
    const[moreData, setmoreData]=useState({
        Thingtwo: ''
    })

    useEffect(()=>{
         axios.get('https://api.ebird.org/v2/data/obs/KZ/recent', {
             headers: {
                    'X-eBirdApiToken': 'f8to0do81o6q'}
        
        })
        .then(res=>{
            console.log('Response from main API:', res );
            console.log('comName', res.data[1]['comName'])
            let thingData=res.data[1]['comName'];
            let thing2Data=res.data[1]['sciName']
            setData({Thing:thingData})
            setmoreData({Thingtwo:thing2Data})
            
        } )
    },[])
    return (
        <div>
            <h1>
               {Data.Thing}
            </h1>
            <p>
                {moreData.Thingtwo}
            </p>
        </div>
    );
};
 
export default Bird1;