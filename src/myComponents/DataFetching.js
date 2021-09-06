import React, {useState, useEffect} from 'react'
import axios from 'axios'

function DataFetching() {

    const [activity, setActivity] = useState(0)

    useEffect(()=>{
        axios.get('https://www.boredapi.com/api/activity')
        .then(res=>{
            console.log(res)
            setActivity(res.data)
        })
        .catch(err=>{
            console.log(err)
        })
    }, [])

    return (
        <div>
            <h1>{activity.activity}</h1>
        </div>
    )
}

export default DataFetching
