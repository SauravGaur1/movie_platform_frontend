import React from 'react'

function HeadingWithMore({
    children
}) {
  return (
    <div className='flex justify-between'>
        {children}
    </div>
  )
}

export default HeadingWithMore