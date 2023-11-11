import React from 'react'
import Project from '../Cards/Project'


const Projects = () => {
    return (
        <div>
            <div className='flex flex-col items-center justify-center'>
                <h2 className='text-xl sm:text-3xl p-3 font-serif'>My Recent Projects</h2>
                <p className='text-xl sm:text-4xl p-3 font-serif'>
                    Here are some of the projects I have done.
                </p>
            </div>
            <div className='flex flex-wrap justify-center '>
                <div className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 m-4' >
                    <Project
                        imgURl={"https://yt3.googleusercontent.com/dWGkEjP7_jXA7UeZ5W2Iy4xcfDohU4VFKXVFrFiOroVeEwmlRmGKYE2BEVxuurIB4g-iKbz4YA=s900-c-k-c0x00ffffff-no-rj"}
                        href={""}
                    ></Project>
                </div>
                <div className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 m-4' >
                    <Project
                        imgURl={"https://yt3.googleusercontent.com/5qwoTGRZnM39x-A3byDMm0P1QihgIz_c-ah1mvidszsOQckA788p4hdrrrXiZZvcZu3JGcn4_Q=s900-c-k-c0x00ffffff-no-rj"}
                        href={""}
                    ></Project>
                </div>
                <div className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 m-4' >
                    <Project
                        imgURl={"https://yt3.googleusercontent.com/m7MDYrRp3ve_zEpxiZ0Qd7oot1YnItLKNzykUdVb15-oZNUqYFDqvlxB4vk9WS4O2fh2aORj=s900-c-k-c0x00ffffff-no-rj"}
                    ></Project>
                </div>
            </div>
        </div>

    )
}

export default Projects