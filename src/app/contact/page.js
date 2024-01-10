import Banner from "../components/banner/page"
import NavBar from "../components/navbar/page"

export default function contact() {
    return (
      <main className="flex min-h-screen flex-col justify-between w-full">
         <div>
           <Banner/>
           <NavBar/>
          <h1>Contact Us</h1>
         </div>
      </main>
    )
  }