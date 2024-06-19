'use client';

import { Button, Card, CardBody, CardFooter, CardHeader } from "@nextui-org/react";
import { BiSolidError } from "react-icons/bi";

 
 
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
 
  return (
      <main className="flex h-full flex-col items-center justify-center vertical-center">
          <Card className="mx-auto w-2/5">
              <CardHeader   className="flex flex-col items-center justify-center">
                  <div className="flex flex-row gap-2 items-center justify-center text-secondary-50">
                      <BiSolidError size={30} className=" text-slate-900"/>
                      <h1   className=" text-3xl font-semibold  text-slate-900">Error</h1>
                  </div>
              </CardHeader>
              <CardBody>
                  <div className="flex flex-col justify-center font-semibold  items-center text-slate-900">
                      {error.message}
                  </div>
              </CardBody>
              <CardFooter  className="flex justify-center">
                  <Button    onClick={()=>reset()}   color="secondary" variant="bordered">
                      Try Again
                  </Button>
              </CardFooter>
              
          </Card>
  
    </main>
  );
}