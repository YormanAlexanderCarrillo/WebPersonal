import React from 'react'
import { Avatar, Link } from '@nextui-org/react'

const Footer = () => {
    return (
        <div className='flex flex-col h-50 bg-cyan-700 items-center rounded-b-2xl '>
            <h2 className='font-serif text-sl sm:text-2xl pb-1 pt-2'> Construyendo una infraestructura digital robusta.</h2>

            <div className="flex gap-3 items-center sm:p-5 pb-2">
                <Avatar as={Link} target="_blank"
                    href="https://www.linkedin.com/in/yorman-alexander-carrillo-martinez-aa64651aa/"
                    src="https://cdn-icons-png.flaticon.com/128/145/145807.png"
                />
                <Avatar as={Link} target="_blank"
                    href="mailto:yorman.carrillo@uptc.edu.co"
                    src="https://cdn-icons-png.flaticon.com/128/6788/6788206.png"
                />
                <Avatar as={Link} target="_blank"
                    href="https://github.com/YormanAlexanderCarrillo"
                    src="https://cdn-icons-png.flaticon.com/128/2111/2111432.png"
                />
                <Avatar as={Link} target="_blank"
                    href="https://wa.me/+573227076137"
                    src="https://cdn-icons-png.flaticon.com/128/3670/3670051.png"
                />
            </div>

            <div className="flex  items-center pb-3">
                    <h3 className='font-serif text-xs sm:text-sm'>Hecho con react, tailwind y nextui.</h3>
            </div>
        </div>
    )
}

export default Footer