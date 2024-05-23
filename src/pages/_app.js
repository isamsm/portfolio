import { Inter } from 'next/font/google'
import '../globals.css'
import { AOSInit } from '../components/Aos'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
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
