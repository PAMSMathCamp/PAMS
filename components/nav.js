import { useRouter } from 'next/router'

import Image from 'next/image'
import Link from 'next/link'
import RegisterButton from './reg';

export default function NavBar () {

    const router = useRouter();

    return <>
        <nav className="hidden lg:flex items-center gap-[70px] p-[50px] h-[150px]">
            <Image src="/logo.png" width={200} height={73} />
            <div className={router.route === "/" ? 'underline decoration-8' : ''}><Link href="/">About</Link></div>
            <div className={router.route === "/curriculum" ? 'underline decoration-8' : ''}><Link href="/curriculum">Curriculum</Link></div>
            <div className={router.route === "/contact" ? 'underline decoration-8' : '' + ' mr-auto'}><Link href="/contact">Contact Us</Link></div>

            <RegisterButton />
        </nav>

        <nav className="flex lg:hidden flex-col items-center m-5">
            <Image src="/logo.png" width={200} height={73} />
            <div className="flex justify-center gap-5 mt-2">
                <div className={router.route === "/" ? 'underline decoration-8' : ''}><Link href="/">About</Link></div>
                <div className={router.route === "/curriculum" ? 'underline decoration-8' : ''}><Link href="/curriculum">Curriculum</Link></div>
                <div className={router.route === "/contact" ? 'underline decoration-8' : '' + ' mr-auto'}><Link href="/contact">Contact Us</Link></div>
            </div>
        </nav>
    </>
}
