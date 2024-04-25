import { Inter } from 'next/font/google'
import './globals.css'
import { AOSInit } from './components/Aos'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Portfolio da Isabelly',
  description:
    'Porfolio da Isabelly Maria Marques de Souza, desenvolvedora front-end',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"
        />
      </head>
      <body className={inter.className}>
        <AOSInit />
        {children}
      </body>
    </html>
  )
}
