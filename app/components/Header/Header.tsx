import Link from 'next/link'
import styles from './Header.module.css'

export default function NavBar() {
    return (
        <nav className={styles.NavBar}>
            <div>
                <Link href="/">Home</Link>
            </div>

            <div>
                <Link href="/orders">Orders</Link>
            </div>

        </nav>
    )
}