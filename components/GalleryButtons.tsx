import React from 'react'
import Image from 'next/image';

const GalleryButtons = (props: any) => {
    return (
        <button onClick={() => props.onClick(props.Id)}
                className={`${props.selected ? 'outline-1 outline-white opacity-100' : ''} opacity-60 hover:opacity-100 transition duration-300 overflow-hidden w-full rounded-md h-16 flex items-center justify-center cursor-pointer`}>
            <Image className='relative' src={props.imgSrc} alt='bg' width={0} height={0} layout='responsive'/>
            <div className='absolute bg-white rounded-md py-1 px-4 font-argentum-regular text-darkPink'>
                {props.ButtonName}
            </div>
        </button>
    )
}

export default GalleryButtons
