import Head from 'next/head'
import Image from 'next/image'
import RegisterButton from '../components/reg';
import { useScreenType } from '../hooks/useScreenType'
import styles from '../styles/Home.module.css'

export default function Home() {

	const screenType = useScreenType();


	return (
		<div className={styles.content}>

			<div className={screenType === "desktop" ? styles.headsplit : ''}>
				<div className={styles.left}>
					<div>10th Annual</div>
					<div className={styles.pamsh}>Palo Alto Middle School Math Camp</div>

					<p>
						<strong>Location: </strong> Gunn High School
					</p>
					<p>
						<strong>Session 1: </strong> June 6th - 10th, 2022 <br />
						<strong>Session 2: </strong> June 13th - 17th, 2022
					</p>
					<div>
						<div><strong>Cost: </strong> $250 </div>
						<div className={styles.note}>Financial Aid is Available.</div>
					</div>
					<p style={{ marginBottom: 40 }}>
						Organized by members of the <strong>Gunn Math Circle</strong> and <strong>Paly Math Club</strong>,
						the <strong>Palo Alto Middle School</strong> (PAMS) Math Camp aims to build interest
						in math in middle school students through an exploration of various
						topics, <strong>several of which are not covered in the standard middle
							school/high school curriculum.</strong>
					</p>

					<RegisterButton />
				</div>
				{screenType === 'desktop' && <div className={styles.right}>
					<Image src="/squiggles.png" width={457} height={424.5} />
				</div>}
			</div>

		</div>
	)
}
