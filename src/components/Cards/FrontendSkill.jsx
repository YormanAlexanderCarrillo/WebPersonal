import React from 'react'
import { Card, CardHeader, CardBody, CardFooter, Divider, Progress } from '@nextui-org/react'
const FrontendSkill = () => {
    return (
        <div className=' w-60 ml-10 mr-10 pb-5' >
            <Card className='h-max w-70'>
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
                            value={50}
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
                            label="CSS"
                            value={50}
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
                            value={40}
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
                            label="NEXTUI"
                            value={40}
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
                            value={40}
                        ></Progress>
                    </ul>
                </CardBody>

            </Card>
        </div>
    )
}

export default FrontendSkill