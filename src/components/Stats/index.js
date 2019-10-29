import React from 'react'
import { FiThermometer, FiCloudRain, FiSun } from 'react-icons/fi'

import Value from './Value'
import Chart from './Chart'

const Stats = () => {
  let values = [
    {
      title: 'Degrees',
      value: '24°',
      id: 'degrees',
      icon: <FiThermometer />
    },
    {
      title: 'Moisture',
      value: '35%',
      id: 'moisture',
      icon: <FiCloudRain />
    },
    {
      title: 'Ultra Violet',
      value: 2.4,
      id: 'uv',
      icon: <FiSun />
    }
  ]
  return (
    <div className='stats-container'>
      <div className='stats-values'>
        {values.map((el, i) => (
          <Value item={el} key={i} />
        ))}
      </div>
      <Chart />
    </div>
  )
}

export default Stats
