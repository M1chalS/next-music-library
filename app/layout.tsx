import type {Metadata} from 'next'
import {Inter} from 'next/font/google'

const inter = Inter({subsets: ['latin']})

export const metadata: Metadata = {
    title: 'Music library app',
    description: 'Music library where you can CRUD your favorite albums and songs.',
}

export default function RootLayout({children}: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                    {children}
            </body>
        </html>
    )
}
