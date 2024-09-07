import React from 'react'

function HorizonalScrollView({
    children
}) {
    return (
        <div className='overflow-x-auto scrollbar-hide'>
            <div class="inline-flex space-x-4">
                {children}
            </div>
        </div>
    )
}

export default HorizonalScrollView