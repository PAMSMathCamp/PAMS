import { useRouter } from 'next/router'
import styles from '../styles/Nav.module.css'

import Image from 'next/image'
import Link from 'next/link'
import RegisterButton from './reg';

export default function NavBar () {

    const router = useRouter();
    console.log(router.route);

    return (
        <nav className={styles.nav}>
            <Image src="/logo.png" width={200} height={73} />
            <div className={router.route === "/" ? styles.selected : ''}><Link href="/">About</Link></div>
            <div className={router.route === "/curriculum" ? styles.selected : ''}><Link href="/curriculum">Curriculum</Link></div>
            <div className={router.route === "/contact" ? styles.selected : '' + ' ' + styles.push}><Link href="/contact">Contact Us</Link></div>

            <RegisterButton />
        </nav>
    )
}
