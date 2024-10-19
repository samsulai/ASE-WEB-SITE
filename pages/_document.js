import Document, { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';

class MyDocument extends Document {
	render() {
		return (
			<Html>
				<Head>
					<link rel="theme-color" href="#0000" />
				</Head>

				
				<body className="">
					<Main />
					<NextScript />

					{/* <Script 
						id="wowjs"
						src='https://cdnjs.cloudflare.com/ajax/libs/wow/1.1.2/wow.min.js'
						strategy='beforeInteractive'
					/> */}

					{/* <Script 
						id="google-translate"
						src='https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit'
						strategy='beforeInteractive'
					/> */}

					<Script
						id="raw-func"
						async
						defer
						strategy="afterInteractive"
						dangerouslySetInnerHTML={{
						__html: `
							// new WOW().init();

							// function googleTranslateElementInit() {
							// 	new google.translate.TranslateElement({pageLanguage: 'en'}, 'google_translate_element');
							// }

							// googleTranslateElementInit();
						`,
					}}
					/>

	
				</body>
			</Html>
		);
	}
}

export default MyDocument;