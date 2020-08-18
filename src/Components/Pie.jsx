import React, {useState} from 'react'


import one from './json/year_days.json'
import two from './json/year_months.json'
import three from './json/6month_weeks.json'

// useFilter to modulate the file

export default function Pie() {

    const time = [one, two, three]
    const [thing, setThing] = useState(three)

    return (

    <div>
     <button>
    { time.map ( theTime => setThing(theTime) )} 
    </button>   
            
   </div>

    )}
