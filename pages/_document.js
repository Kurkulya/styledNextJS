import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components';
import JssProvider from 'react-jss/lib/JssProvider';
import getPageContext  from 'helpers/styles/pageContext';
import injectGlobalStyles  from 'helpers/styles/globalStyles';

// injectGlobalStyles()

const withJssProvider = (App, pageContext, props) => (
  <JssProvider
    registry={pageContext.sheetsRegistry}
    generateClassName={pageContext.generateClassName}
  >
    <App pageContext={pageContext} {...props} />
  </JssProvider>
)

export default class MyDocument extends Document {
  static async getInitialProps (ctx) {
    const sheet = new ServerStyleSheet();
    const pageContext = getPageContext();

    const page = ctx.renderPage(App => props => {
      const WrappedApp = withJssProvider(App, pageContext, props); // for material-ui
      sheet.collectStyles(WrappedApp);  // for styled-components
      return WrappedApp;
    });

    return {
      ...page,
      styles: (
        <style
          id="jss-server-side"
          dangerouslySetInnerHTML={{ __html: pageContext.sheetsRegistry.toString() }}
        />
      ),
      styleTags: sheet.getStyleElement(),
      pageContext,
    }
  }

  render () {
    return (
      <html>
        <Head>
          <noscript id="jss-insertion-point" />
          {this.props.styleTags}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}