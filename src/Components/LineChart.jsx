import React, {useState} from 'react'

import days from './json/year_days.json'
import months from './json/year_months.json'
import monthsweeks from './json/6month_weeks.json'

// useFilter to modulate the file

    function getTime (time){  return time}

export default function Pie() {

    
    const [thing, setThing] = useState()

    const thin = ['days', 'months', 'monthsweeks']

    const timeFram =  getTime()

    return (

    <div>
        <button>
        { thin.map ( time => setThing({time})  )} 
        </button>   
    </div>

    )}
