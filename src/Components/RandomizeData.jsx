import React, { useCallback, useMemo} from 'react'
import { Chart } from "react-charts";
import useDemoConfig from "./useDemoConfig";

export default function Roger() {

      const { data, randomizeData } = useDemoConfig({ series: 10 });
    
      const series = useMemo(() => ({ showPoints: false }), [] )

      const axes = useMemo(() => [{ primary: true, type: "time", position: "bottom" },
                                  { type: "linear", position: "left" }],[])

      const getSeriesStyle = useCallback(() => ({transition: 'all .5s ease' }),[])

        // const getDatumStyle = React.useCallback(  () => ({ transition: 'all .5s ease' }), [])

    return (

      <div>
      <button onClick={randomizeData}>Randomize Data</button>
      <div style={{height: '400px', width: '600px'}}>
      <Chart

      getSeriesStyle={getSeriesStyle}
      // getDatumStyle={getDatumStyle}
      data={data}
      series={series}
      axes={axes}
      tooltip
      primaryCursor
      secondaryCursor/>
    </div>

    </div>
    )
}
