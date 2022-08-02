import React, { useState } from 'react'
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, LineElement, Legend, CategoryScale, LinearScale, PointElement } from 'chart.js'

ChartJS.register(
  Title, Tooltip, LineElement, Legend, CategoryScale, LinearScale, PointElement
)

const Chart = () => {

  const [data, setData] = useState({
    labels: [ "1am", "2am", "3am", "4am", "5am" ],
    datasets: [
      {
        label: "Sample Release Dataset",
        data:[40, 20, 30, 40, 30,],
        backgroundColor: 'lightblue'
      }
    ]
  })

  return (
    <div className='w-75 mt-4' >
      <Line data={data} >Hello</Line>
    </div>
  )
}

export default Chart