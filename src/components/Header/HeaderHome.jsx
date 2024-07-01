import React from 'react'
import { Avatar } from '@nextui-org/react';

const HeaderHome = () => {
    return (
        <div className='bg-gray-100 pt-3 pb-3 sm:pt-5 sm:pb-5 flex justify-center items-center'>
            <div className='w-1/4 text-center'>
                <Avatar src='https://avatars.githubusercontent.com/u/120344075?v=4'
                    className='w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36 lg:w-40 lg:h-40 xl:w-44 xl:h-44' />
            </div>
            <div className='w-1/2 text-center'>
                <h1 className='font-serif text-1xl sm:text-2xl md:text-2xl  lg:text-3xl xl:text-4xl'>
                    Ingeniero de sistemas y computación.
                </h1>
                <br />
                <p className='font-serif hover:text-5xl text-1xl sm:text-2xl md:text-2xl lg:text-3xl xl:text-4xl'>
                    Desarrollador de software
                </p>
            </div>
        </div>
    )
}

export default HeaderHome;
