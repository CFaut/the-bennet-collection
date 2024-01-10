import Image from 'next/image'
import Link from 'next/link'
import NavBar from './components/navbar/page'
import HomeBody from './components/home-body/page'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
       <div className='banner'>
        <h1>The Bennet Collection</h1>
       </div>
       <NavBar/>
       <HomeBody/>
       <div className='footer'>
        <h3>Footer</h3>
       </div>
    </main>
  )
}
