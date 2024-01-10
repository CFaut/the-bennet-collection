import NavBar from "../components/navbar/page";
import Banner from "../components/banner/page";

export default function Shop() {
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