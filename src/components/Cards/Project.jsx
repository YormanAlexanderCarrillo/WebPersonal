import React from 'react'
import { Image, Card, CardFooter, Button, Link } from '@nextui-org/react'

const Project = ({imgURl, href}) => {
    return (

        <div className='flex'>
            <Card
                isFooterBlurred
                radius="lg"
                className="border-none"
                classNames= 'flex w-60'
            >
                <Image
                    isZoomed
                    alt="Woman listing to music"
                    className="object-cover"
                    height={500}
                    src= {imgURl}
                    width={300}
                />
                <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
                    <p className="text-tiny text-black/80">Disponible en.</p>
                    <Button as={Link} target="_blank" className="text-tiny text-white bg-black/20" variant="flat" color="default" radius="lg" size="sm" href= {href}>
                        Ver
                    </Button>
                </CardFooter>
            </Card>
        </div>
    )
}

export default Project