import Link from "next/link"
export default function NavBar() {
    return (
    <div className='flex justify-evenly w-full mt-3'>
        <Link className="nav-btn" href='/'>Home</Link>
        <Link className="nav-btn" href='/about'>About Us</Link>
        <Link className="nav-btn" href='/shop'>Shop</Link>
        <Link className="nav-btn" href='/custom'>Custom Made</Link>
        <Link className="nav-btn" href='/contact'>Contact Us</Link>
    </div>
    )
  }