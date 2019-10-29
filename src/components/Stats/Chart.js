import React from 'react'
import { Line } from 'react-chartjs-2'

const data = {
  labels: ['11 AM', '12 PM', '1 PM', '2 PM', '3 PM', '4 PM', '5 PM', '6 PM'],
  datasets: [
    {
      label: 'Degrees',
      fill: false,
      borderColor: 'rgb(231, 76, 60) ',
      data: [14, 15, 16, 20, 21, 17, 16, 24],
      yAxisID: 0
    },
    {
      label: 'Moisture',
      fill: false,
      borderColor: 'rgb(52, 152, 219)',
      data: [35, 29, 28, 24, 28, 30, 27, 35],
      yAxisID: 1
    },
    {
      label: 'Ultra Voilet',
      fill: false,
      borderColor: 'rgb(241, 196, 15)',
      data: [1.0, 2, 2.2, 2.4, 2.8, 2.3, 2.1, 2.4],
      yAxisID: 2
    }
  ]
}

const Chart = () => {
  return (
    <div className='chart-container'>
      <Line
        data={data}
        options={{
          maintainAspectRatio: false,
          scales: { yAxes: [{ id: 0 }, { id: 1 }, { id: 2 }] },
          legend: { display: false }
        }}
      />
    </div>
  )
}

export default Chart
