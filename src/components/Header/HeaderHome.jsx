import React from 'react';
import { Avatar } from '@nextui-org/react';

const HeaderHome = () => {
    return (
        <div className='bg-gray-100 flex flex-col sm:flex-row justify-center items-center w-full'>
            <div className='flex justify-center items-center w-full text-center mb-4 sm:mb-0'>
                <Avatar 
                    src='https://avatars.githubusercontent.com/u/120344075?v=4'
                    className='w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36 lg:w-40 lg:h-40 xl:w-44 xl:h-44' 
                />
            </div>
            <div className='w-full text-center sm:pt-10 sm:pb-10'>
                <h1 className='font-serif text-xl md:text-3xl lg:text-4xl'>
                    Ingeniero de sistemas y computación.
                </h1>
                <br className='hidden sm:block' />
                <p className='font-serif text-xl  md:text-2xl lg:text-3xl'>
                    Desarrollador de software
                </p>
            </div>
        </div>
    )
}

export default HeaderHome;