import React from 'react'
import { Card, CardHeader, CardBody, CardFooter, Divider, Progress } from '@nextui-org/react'
const FrontendSkill = () => {
    return (
        <div className=' w-96 ml-10 mr-10 pb-5' >
            <Card className='h-auto w-70'>
                <CardHeader className='justify-center'>
                    <h3>Frontend Skills</h3>
                </CardHeader>
                <Divider />
                <CardBody>
                    <ul>
                        <Progress size='sm' radius='sm' className={
                            {
                                base: "max-w-md",
                                track: "drop-shadow-md border border-default",
                                indicator: "bg-gradient-to-tr from-pink-500 to-yellow-500",
                                label: "tracking-wider font-medium text-default-600",
                                value: "text-foreground/60"
                            }}
                            label="JAVASCRIPT"
                            value={75}
                            color='danger'
                        ></Progress>
                        <br />
                        <Progress size='sm' radius='sm' className={
                            {
                                base: "max-w-md",
                                track: "drop-shadow-md border border-default",
                                indicator: "bg-gradient-to-tr from-pink-500 to-yellow-500",
                                label: "tracking-wider font-medium text-default-600",
                                value: "text-foreground/60"
                            }}
                            label="HTML"
                            value={60}
                            color='danger'
                        ></Progress>
                        
                        <br />
                        <Progress size='sm' radius='sm' className={
                            {
                                base: "max-w-md",
                                track: "drop-shadow-md border border-default",
                                indicator: "bg-gradient-to-tr from-pink-500 to-yellow-500",
                                label: "tracking-wider font-medium text-default-600",
                                value: "text-foreground/60"
                            }}
                            label="REACT JS"
                            value={80}
                            color='danger'
                        ></Progress>
                        <br />
                        <Progress size='sm' radius='sm' className={
                            {
                                base: "max-w-md",
                                track: "drop-shadow-md border border-default",
                                indicator: "bg-gradient-to-tr from-pink-500 to-yellow-500",
                                label: "tracking-wider font-medium text-default-600",
                                value: "text-foreground/60"
                            }}
                            label="NEXT.JS"
                            value={70}
                            color='danger'
                        ></Progress>
                        <br />
                        <Progress size='sm' radius='sm' className={
                            {
                                base: "max-w-md",
                                track: "drop-shadow-md border border-default",
                                indicator: "bg-gradient-to-tr from-pink-500 to-yellow-500",
                                label: "tracking-wider font-medium text-default-600",
                                value: "text-foreground/60"
                            }}
                            label="TAILWIND CSS"
                            value={80}
                            color='danger'
                        ></Progress>
                         <br />
                        <Progress size='sm' radius='sm' className={
                            {
                                base: "max-w-md",
                                track: "drop-shadow-md border border-default",
                                indicator: "bg-gradient-to-tr from-pink-500 to-yellow-500",
                                label: "tracking-wider font-medium text-default-600",
                                value: "text-foreground/60"
                            }}
                            label="REACT NATIVE"
                            value={80}
                            color='danger'
                        ></Progress>
                    </ul>
                </CardBody>

            </Card>
        </div>
    )
}

export default FrontendSkill