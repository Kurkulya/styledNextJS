import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const { renderPage } = ctx;
    const sheet = new ServerStyleSheet();

    const page = renderPage((App) => (props) =>
        sheet.collectStyles(<App {...props} />),
    );

    const styleTags = sheet.getStyleElement();

    const initialProps = await Document.getInitialProps(ctx);

    return { ...initialProps, ...page, styleTags };
  }

  render() {
    return (
      <Html>
        <Head>
          {this.props.styleTags}
        </Head>
        <body className="custom_class">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
