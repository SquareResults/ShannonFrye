import { Inter, Bebas_Neue, Montserrat } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })
const bebas = Bebas_Neue({
  weight: '400',
  subsets: ['latin']
})

const montserrat = Montserrat({
  weight: '400',
  subsets: ['latin']
})

export const metadata = {
  title: 'Shannon Frye',
  description: '',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={bebas.className}>{children}</body>
    </html>
  )
}
