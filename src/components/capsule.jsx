import React from 'react'
import CardWrapper from './card'

function Capsule({
    bgColor= "#FFFFFF26",
    height = 24,
    width = 37,
    child,
}) {
  return (
    <CardWrapper>
        <div 
            style={{
                backgroundColor: bgColor,
                height: `${height}px`,
                width: `${width}px`,
            }}
            className="inline-block text-center mr-[6px]"> 
            {child}
        </div>
    </CardWrapper>
  )
}

export default Capsule