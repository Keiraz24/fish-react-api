
import axios from 'axios';
import React, {useEffect, useState} from 'react';

 
const Bird2 = () => {

    const [Data, setData]=useState({
        Thing:'',
        numberofDead:[],
        
    })
    const[moreData, setmoreData]=useState({
        Thingtwo: ''
    })
    const[funData, setfunData]=useState({
        Thingthree: ''
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
            let thing2Data=res.data[0]['sciName'];
            const Dead=[];
            let thing3Data=res.data[0]['howMany'];
            for(x=0; x=thing3Data.length; x++){
                Dead.push(1);
            }
            setData({Thing:thingData,
            numberofDead:Dead})
            setmoreData({Thingtwo:thing2Data})
            setfunData({Thingthree:thing3Data})

            
        } )
    },[])
     return (
        <div>
             {for(x=0; x=thing3Data.length; x++){
                return(

                )
             }}
            <h1>
            {Data.Thing}
            </h1>
            <p>
            {moreData.Thingtwo}
            </p>
            <p>
                Number of Specimens at Cornell Lab: 
                
            {funData.Thingthree}
            </p>
        </div>
    );
};
 
export default Bird2;