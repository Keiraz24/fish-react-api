import axios from 'axios';
import React, {useEffect, useState} from 'react';
 
const Bird1 = () => {
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
            console.log('comName', res.data[1]['comName'])
            let thingData=res.data[1]['comName'];
            let thing2Data=res.data[1]['sciName']
            const Dead=[];
            let thing3Data=res.data[1]['howMany'];
console.log("how many", res.data[1]['howMany']);

           for(var x=0; x<thing3Data; x++){
               Dead.push("1");
            }
            console.log(Dead);
            setData({Thing:thingData,
            numberofDead:Dead})
            setmoreData({Thingtwo:thing2Data})
            setfunData({Thingthree:thing3Data})
            
        } )
    },[])
    return (
        <div>
        <>
         {Data.numberofDead.map(element=>{
            return(
                <>
                {/* <img src="/deadbird.jpg" alt="deadbird"/> */}

                
                <img src="https://lh3.google.com/u/0/d/1qT1QJWFU8uT0Nv4P9jiNC7ZfIWaEz7Wq" alt="deadbird" width="128" height="128"/>
                  
                </>
            );

         })}
</>
<title>
                Bird1
            </title>
            <h1>
               {Data.Thing} bird
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
 //bird 1 web page
export default Bird1;