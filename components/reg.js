import styles from '../styles/Reg.module.css'

export default function RegisterButton () {
    return (
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSdGWLZaYpiEfBBf5DpJ_gJYnoRKfP7CjVvUy_M9m0x1vZSdSw/viewform" target="_blank" rel="noopener noreferrer">
            <div className={styles.button}>
                Register Now!
            </div>
        </a>
    )
}