import Head from 'next/head'
import { DefaultSeo } from 'next-seo';
import '../styles/globals.css'



function MyApp({ Component, pageProps }) {

  return (
    <>

      <Head>
		<link rel="shortcut icon" href="/favicon.ico" type="image/x-icon"></link>
      </Head>
      
      <DefaultSeo
			titleTemplate = '%s - The African School of Economics'
			defaultTitle = 'The African School of Economics'
			openGraph={{
				type: 'website',
				locale: 'en_IE',
				url: 'https://ase.chibykes.dev/',
				siteName: 'The African School of Economics',
			}}
			twitter={{
				handle: '@ASE_cotonou',
				site: '@ASE_cotonou',
				cardType: 'summary_large_image',
			}}
		/>

      <Component {...pageProps} />

    </>
  )
}

export default MyApp
