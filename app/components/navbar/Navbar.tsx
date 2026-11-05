"use client"
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'


function Navbar() {
    const pathname = usePathname();
    const router = useRouter();

    const nav = [
        { name: 'خانه', route: '/' },
        { name: 'فروشگاه', route: '/store' },
    ]

    const handleClick = () => {
        router.push('/store');
    }

    return (
        <nav>
            <ul className='flex gap-2'>

                {
                    nav.map(item => {
                        return (
                            <li key={item.name} className={pathname === item.route ? 'bg-blue-300' : ''}>
                                <Link href={item.route}>{item.name}</Link>
                            </li>
                        )
                    })
                }

            </ul>

            <button className='rounded-xl bg-blue-500 text-white text-sm
            cursor-pointer p-2 font-bold' onClick={handleClick}>فروشگاه</button>
        </nav>
    )
}

export default Navbar