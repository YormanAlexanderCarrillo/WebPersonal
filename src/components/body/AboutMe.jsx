import React from 'react';

const AboutMe = () => {
    return (
        <div className='bg-cyan-700 flex flex-col items-center rounded-t-2xl'>
            <div className='pb-3 pt-3 sm:pt-6 sm:pb-6 md:pt-10 md:pb-10'>
                <h2 className='text-center text-white text-sm sm:text-xl md:text-2xl'>
                    Hi! I'm Yorman Alexander Carrillo Martinez
                </h2>
            </div>
            <div className='w-3/4 md:w-2/4 mx-auto pb-3 sm:pb-6 md:pb-14'>
                <p className='text-justify md:text-center text-white  text-sm sm:text-xl md:text-2xl '>
                    I'm passionate about software development and I'm always looking for
                    opportunities to learn and grow. I am a Telecommunications Technologist
                    and Systems Engineering student at Universidad Pedagógica y Tecnológica de Colombia.
                    My strong background in telecommunications
                    and my growing knowledge in systems engineering allow me to approach technology
                    projects with a holistic approach and an analytical mindset.
                </p>
            </div>
        </div>
    );
};

export default AboutMe;
