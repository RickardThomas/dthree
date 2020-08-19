import React, {useRef} from 'react'

import * as d3shape  from 'd3-shape'

//Tue 18 Aug 2020 21:30:28

export default function CPieShape() {

//Wed 19 Aug 2020 02:07:11 - some pie chart code for INZU chart.js.

            // colors: d3.scale.ordinal()
            //     .domain(["1st", "2nd"])
            //     .range(["#F7928F","#EBECED", "#838CB7"])

            
            // relevant data for piechart
const pieData = [
                {
                    "id": 23,
                    "num": 183,
                    "date":"Jan"
            
                },
                {
                    "id": 43,
                    "num": 58,
                    "date":"Feb"
                },
                {
                    "id": 12,
                    "num":70,
                    "date":"Mar"
                }
            ];
            
            
        // const inputRef = useRef();
        // const ref = inputRef.current

        // console.log(d3shape.arc)
        
    return(

        <div ref={inputRef}>

        <svg>   

        </svg>

        </div>

    )
}
