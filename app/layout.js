
import './globals.css'
import { Montserrat } from 'next/font/google'
import Footer from './components/footer'
import Header from './components/header'
import Providers from './providers'




const inter = Montserrat({ subsets: ['latin'] })

export const metadata = {
  title: 'KATRINA SHUI',
  description: 'A breif overall for who katrina is!',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" >
      <body className={inter.className}>
    
     
      
       {/* <Providers>  */}
       
        {children}
        {/* </Providers> */}
      <Footer />

      </body>
     
      
    </html>
  )
}
