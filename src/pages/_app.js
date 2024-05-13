import { Inter } from 'next/font/google'
import '../globals.css'
import { AOSInit } from '../components/Aos'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Portfolio da Isabelly',
  description:
    'Porfolio da Isabelly Maria Marques de Souza, desenvolvedora front-end',
}

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"
        />
      </Head>
      <div className={inter.className}>
        <AOSInit />
        <Component {...pageProps} />
      </div>
    </>
  )
}
