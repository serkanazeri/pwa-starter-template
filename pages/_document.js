import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang='en'>
      <Head>
        <link rel='manifest' href='/manifest.json' />
        <link rel='apple-touch-icon' href='/icon-256x256.png'></link>
        <meta name='theme-color' content='#BB2649' />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
