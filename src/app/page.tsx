
// "use client"

import { auth, signOut } from "@/auth";
import { Button } from "@nextui-org/button";

const Home = async () => {
  
  const  session = await auth();
  return (
    <div  className="p-4">
      <h1 className="text-3xl">Hello World</h1>
      <h3 className="text-2xl">User session data:</h3>
      {session ? (
        <div className="">
          <pre>{JSON.stringify(session, null, 2)}</pre>
          <form action={async () => {
            "use server"
            await signOut()
          }}>
            <Button  type="submit" color="secondary" variant="bordered">
       Sign Out
            </Button>
          </form>
        </div>
      ) : (
        <div>Not signed in</div>
      )}
   </div>
  );
}
export default Home