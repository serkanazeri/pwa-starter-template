import Head from 'next/head'
import { Roboto } from '@next/font/google'
import styles from '@/styles/Home.module.css'

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
})

export default function Home() {
  return (
    <>
      <Head>
        <title>PWA</title>
        <meta name='description' content='PWA starter template' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
        <meta property='og:title' content='' />
        <meta property='og:description' content='' />
        <meta property='og:image:url' content='' />
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:title' content='' />
        <meta name='twitter:description' content='' />
        <meta name='twitter:image' content='' />
      </Head>
      <main className={styles.main + ' ' + roboto.className}>
        PWA starter template
      </main>
    </>
  )
}
