import React from 'react'

import Icon from './Icon'

const Value = ({ item }) => {
  return (
    <div className='value-container'>
      <Icon item={item} />
      <div className='value-value'>{item.value}</div>
      <div className='value-title'>{item.title}</div>
    </div>
  )
}

export default Value
