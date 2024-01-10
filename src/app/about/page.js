import Banner from "../components/banner/page";
import NavBar from "../components/navbar/page";

export default function About() {
    return (
      <main className="flex min-h-screen w-full flex-col justify-between">
         <div>
          <Banner/>
          <NavBar/>
          <h1>About Us</h1>
         </div>
      </main>
    )
  }