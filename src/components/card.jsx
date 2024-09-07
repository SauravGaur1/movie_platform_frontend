import React from 'react'

function CardWrapper({
    borderRadius = 6,
    children
}) {
  return (
    <div className='inline-block overflow-hidden' style={{
        borderRadius: borderRadius
    }}>
        {children}
    </div>
  )
}

export default CardWrapper