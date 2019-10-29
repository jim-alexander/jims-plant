import React from 'react'

const Icon = ({ item }) => {
  const color = id => {
    if (id === 'degrees') {
      return '#E74C3C'
    }
    if (id === 'moisture') {
      return '#3498DB'
    }
    if (id === 'uv') {
      return '#F1C40F'
    }
  }
  return (
    <div className='value-icon-container' style={{ background: color(item.id) }}>
      <div className='value-icon'>{item.icon}</div>
    </div>
  )
}

export default Icon
