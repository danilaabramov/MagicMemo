import type {Metadata} from 'next'
import {Inter} from 'next/font/google'
import './globals.css'
import {ReactNode} from "react";
import {ThemeProvider} from "@/components/providers/theme-provider";
import {NextFont} from "next/dist/compiled/@next/font";
import {ConvexClientProvider} from "@/components/providers/convex-provider";

const inter: NextFont = Inter({subsets: ['latin']})

export const metadata: Metadata = {
    title: 'Magic Memo',
    description: 'The connected workspace where better, fast work happens',
    icons: {
        icon: [
            {
                media: "(prefers-color-scheme: light)",
                url: "/favicon.ico",
                href: "/favicon.ico"
            },
            {
                media: "(prefers-color-scheme: dark)",
                url: "/favicon.ico",
                href: "/favicon.ico"
            }
        ]
    }
}

export default function RootLayout({children}: { children: ReactNode }) {
    return (
        <html lang="ru" suppressHydrationWarning>
        <body className={inter.className}>
        <ConvexClientProvider>
            <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange
                           storageKey="magicmemo-theme-2">
                {children}
            </ThemeProvider>
        </ConvexClientProvider>
        </body>
        </html>
    )
}
