import Document, { DocumentContext, DocumentInitialProps, Head, Html, Main, NextScript } from 'next/document'

//import { defaultLocale, extractLocaleFromRouter, getHtmlAttributesForLocale, Locale } from '@edgeandnode/gds'

type MyDocumentProps = DocumentInitialProps & {
    //locale: Locale | null
}

export default class MyDocument extends Document<MyDocumentProps> {
    static async getInitialProps(context: DocumentContext) {
        //const { locale } = extractLocaleFromRouter(context)
        const initialProps = await Document.getInitialProps(context)
        return {
            ...initialProps,
            //locale: locale ?? defaultLocale,
        }
    }

    render() {
        const { locale } = this.props

        // removed from html tag: {...getHtmlAttributesForLocale(locale)}
        return (
            <Html data-theme="dark">
                <Head>
                    <link
                        rel="preconnect"
                        href={`http://localhost:3000`}
                        crossOrigin="anonymous"
                    />
                    <link rel="icon" type="image/png" href="https://storage.googleapis.com/graph-web/favicon.png" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}