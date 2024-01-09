import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
       <div className='banner'>
        <h1>The Bennet Collection</h1>
       </div>
       <div className='nav'>
         <Link href='/about'>About Us</Link>
         <Link href='/shop'>Shop</Link>
         <Link href='/custom'>Custom Made</Link>
         <Link href='/contact'>Contact Us</Link>
       </div>
    </main>
  )
}
