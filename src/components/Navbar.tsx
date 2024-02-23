import Link from 'next/link'

export default function Navbar() {
    return (
        <nav className='flex justify-between items-center py-5' >

          <Link href={"/"}>
            <h3 className='text-3xl font-bold cursor-pointer'>Creador de tareas</h3>
          </Link>
          
          <ul className='flex space-x-4'>
            <li>
              <Link href="/">
                <p className='cursor-pointer'>Home</p>
              </Link>
            </li>
            <li>
              <Link href="/new">
                <p className='cursor-pointer'>New</p>
              </Link>
            </li>
          </ul>
        </nav>
    )
}
