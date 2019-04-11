/* eslint-disable react/no-unknown-property */
import React from 'react';
import { Provider } from 'react-redux';
import App, { Container } from 'next/app';
import withRedux from 'next-redux-wrapper';
import withReduxSaga from 'next-redux-saga';
import configureStore from 'redux/store';
import withRoot from 'helpers/styles/withRoot';

export class ExampleApp extends App {
    static async getInitialProps(props) {
        const { Component, ctx } = props;
        let pageProps = {};
        if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps(ctx);
        }
        return { pageProps };
    }

    render() {
        const {
            Component, pageProps, store,
        } = this.props;
        return (
            <Container>
                <Provider store={store}>
                    <Component {...pageProps} />
                </Provider>
            </Container>
        );
    }
}

export default withRoot(withRedux(configureStore)(withReduxSaga(ExampleApp)));
