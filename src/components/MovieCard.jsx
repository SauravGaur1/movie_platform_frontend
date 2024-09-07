import React from 'react'
import Capsule from './capsule';

function MovieCard({ movieCardModel }) {
  return (
    <div className='w-[309px] bg-green-50 h-[450px] relative text-white cursor-pointer bg-transparent' >
        <img className='w-full h-full absolute' src={ movieCardModel.imageSrc } 
            alt={movieCardModel.alt}
        />
        <div className="absolute bottom-[30px] left-[30px]">
            <p className='text-[22px] font-semibold'>
                { movieCardModel.title }
            </p>
            <p className="text-[16px]">
                {movieCardModel.date}
            </p>
            <p className="text-[16px] font-medium">
                {movieCardModel.rating}
            </p>
            { movieCardModel.languages.map((item, idx) => {
                return <>
                    <Capsule child={item} />
                </>
            }) }
        </div>
    </div>
  )
}

export default MovieCard