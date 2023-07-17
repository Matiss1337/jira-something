import Link from 'next/link'

function NavBar() {
  return (
    <ul className='flex'>
      <li>
        <Link href="/">Home</Link>
      </li>
    </ul>
  )
}

export default NavBar