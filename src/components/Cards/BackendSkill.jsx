import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Progress,
} from "@nextui-org/react";
const BackendSkill = () => {
  return (
    <div>
      <div className="w-full sm:w-96 sm:ml-10 sm:mr-10 pb-5">
        <Card className="h-auto">
          <CardHeader className="justify-center">
            <h3>Backend Skills</h3>
          </CardHeader>
          <Divider />
          <CardBody>
            <ul>
              <Progress
                size="sm"
                radius="sm"
                className={{
                  base: "max-w-md",
                  track: "drop-shadow-md border border-default",
                  indicator: "bg-gradient-to-tr from-pink-500 to-yellow-500",
                  label: "tracking-wider font-medium text-default-600",
                  value: "text-foreground/60",
                }}
                label="NODE.JS"
                value={65}
                color="success"
              ></Progress>
              <br />
              <Progress
                size="sm"
                radius="sm"
                className={{
                  base: "max-w-md",
                  track: "drop-shadow-md border border-default",
                  indicator: "bg-gradient-to-tr from-pink-500 to-yellow-500",
                  label: "tracking-wider font-medium text-default-600",
                  value: "text-foreground/60",
                }}
                label="EXPRESS"
                value={70}
                color="success"
              ></Progress>
              <br />
              <Progress
                size="sm"
                radius="sm"
                className={{
                  base: "max-w-md",
                  track: "drop-shadow-md border border-default",
                  indicator: "bg-gradient-to-tr from-pink-500 to-yellow-500",
                  label: "tracking-wider font-medium text-default-600",
                  value: "text-foreground/60",
                }}
                label="JAVA"
                value={55}
                color="success"
              ></Progress>
              <br />
              <Progress
                size="sm"
                radius="sm"
                className={{
                  base: "max-w-md",
                  track: "drop-shadow-md border border-default",
                  indicator: "bg-gradient-to-tr from-pink-500 to-yellow-500",
                  label: "tracking-wider font-medium text-default-600",
                  value: "text-foreground/60",
                }}
                label="SPRING BOOT"
                value={55}
                color="success"
              ></Progress>
              <br />
              <Progress
                size="sm"
                radius="sm"
                className={{
                  base: "max-w-md",
                  track: "drop-shadow-md border border-default",
                  indicator: "bg-gradient-to-tr from-pink-500 to-yellow-500",
                  label: "tracking-wider font-medium text-default-600",
                  value: "text-foreground/60",
                }}
                label="GRAPHQL"
                value={50}
                color="success"
              ></Progress>
              <br />
              <Progress
                size="sm"
                radius="sm"
                className={{
                  base: "max-w-md",
                  track: "drop-shadow-md border border-default",
                  indicator: "bg-gradient-to-tr from-pink-500 to-yellow-500",
                  label: "tracking-wider font-medium text-default-600",
                  value: "text-foreground/60",
                }}
                label="NEST.JS"
                value={80}
                color="success"
              ></Progress>
            </ul>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default BackendSkill;
