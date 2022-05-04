import Head from 'next/head'
import NavBar from '../components/nav'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <div>
		<Head>
			<title>PAMS Math Camp</title>
			<meta name="description" content="Organized by members of the Gunn Math Circle and Paly Math Club, the Palo Alto Middle School (PAMS) Math Camp aims to build interest in math in middle school students through an exploration of various topics, several of which are not covered in the standard middle school/high school curriculum." />
			<link rel="icon" href="/favicon.ico" />
		</Head>

		<NavBar />
		<div className="py-5 px-10 lg:px-[100px]">
			<Component {...pageProps} />
		</div>

      	{/* Footer */}
	</div>
  )
}

export default MyApp
