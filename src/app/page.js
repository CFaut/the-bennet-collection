import Image from 'next/image'
import Link from 'next/link'
import NavBar from './components/navbar/page'
import HomeBody from './components/home-body/page'
import Footer from './components/footer/page'
import Banner from './components/banner/banner'

export default function Home() {
  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-between">
       <Banner/>
       <NavBar/>
       <HomeBody/>
       <Footer/>
    </main>
  )
}
