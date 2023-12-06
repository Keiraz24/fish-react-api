
import axios from 'axios';
import React, {useEffect, useState} from 'react';

 
const Bird2 = () => {

    const [Data, setData]=useState({
        Thing:'',
        Thingtwo: ''
    })
    useEffect(()=>{
         axios.get('https://api.ebird.org/v2/data/obs/KZ/recent', {
             headers: {
                    'X-eBirdApiToken': 'f8to0do81o6q'}
        
        })
        .then(res=>{
            console.log('Response from main API:', res );
            console.log('comName', res.data[0]['comName'])
            let thingData=res.data[0]['comName'];
            setData({Thing:thingData})
            
        } )
    },[])
     return (
        <div>
            <h1>
                this is a test2
                {Data.Thing}
            </h1>
        </div>
    );
};
 
export default Bird2;