import "@/node_modules/react-modal-video/css/modal-video.css"
import "../public/assets/css/style.css"
import 'swiper/css'
// import "swiper/css/navigation"
import "swiper/css/pagination"
import 'swiper/css/free-mode';
import { dM_Sans, } from '@/lib/font'
import { Inter } from "next/font/google";
import Script from "next/script";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
    title: 'Namko Builders',
    description: 'Namko Builders ',
}

export default function RootLayout({ children }) {
    return (
        <html lang="en" className={`${dM_Sans.variable}`}>
            <body>
                
        {/* Google Analytics */}
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=G-T296N1N6H6`}
        />

        <Script id="ga-script" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-T296N1N6H6');
          `}
        </Script>
        {/* End GA */}
                {children}</body>
        </html>
    )
}
