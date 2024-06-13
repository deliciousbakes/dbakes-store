
"use client"

import { Button } from "@nextui-org/react";
import Link from "next/link";

export default function Home() {
  return (
    <div  className="text-3xl p-4">
      <h1>Hello World</h1>
      <Button color="secondary" variant="bordered" as={Link} href="/about">
        Click Me!!
      </Button>
   </div>
  );
}
