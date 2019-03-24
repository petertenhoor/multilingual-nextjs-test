import Document, {Html, Head, Main, NextScript} from 'next/document'
import {lngFromReq} from 'next-i18next/dist/commonjs/utils'

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        const lng = lngFromReq(ctx.req)
        return {...initialProps, lng}
    }

    render() {
        return (
            <Html lang={this.props.lng}>
            <Head>
            </Head>
            <body>
            <Main/>
            <NextScript/>
            </body>
            </Html>
        )
    }
}

export default MyDocument