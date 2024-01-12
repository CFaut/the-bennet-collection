import NavBar from "../components/navbar/page";
import Banner from "../components/banner/page";
import { getDresses } from "@/lib/data";

export default function Shop() {

    const dresses = getDresses().then(response => {
        console.log(response)
        return response;
    });

    return (
      <main className="flex min-h-screen w-full flex-col justify-between">
         <div>
           <Banner/>
           <NavBar/>
           <h1>Shop The Collection</h1>
           
         </div>
      </main>
    )
  }