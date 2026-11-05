"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'

function Navbar() {
    const pathname = usePathname();
    console.log(pathname);

    const nav = [
        { name: 'خانه', route: '/' },
        { name: 'فروشگاه', route: '/store' },
    ]
    return (
        <nav>
            <ul className='flex gap-2'>

                {
                    nav.map(item => {
                        return (
                            <li className={pathname === item.route ? 'bg-blue-300' : ''}>
                                <Link href={item.route}>{item.name}</Link>
                            </li>
                        )
                    })
                }

            </ul>
        </nav>
    )
}

export default Navbar