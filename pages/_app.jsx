import GlobalStyle from '@/styles/GlobalStyle';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import styled, { createGlobalStyle } from 'styled-components';

export default function App({ Component, pageProps }) {
	const router = useRouter();

	useEffect(() => {
		const handleRouteChangeStart = () => NProgress.start();
		const handleRouteChangeComplete = () => NProgress.done();
		const handleRouteChangeError = () => NProgress.done();

		router.events.on('routeChangeStart', handleRouteChangeStart);
		router.events.on('routeChangeComplete', handleRouteChangeComplete);
		router.events.on('routeChangeError', handleRouteChangeError);

		return () => {
			router.events.off('routeChangeStart', handleRouteChangeStart);
			router.events.off('routeChangeComplete', handleRouteChangeComplete);
			router.events.off('routeChangeError', handleRouteChangeError);
		};
	}, [router]);

	const getLayout = Component.getLayout || (page => page);

	return getLayout(
		<>
			<GlobalStyle />
			<NProgressStyles />
			<Component {...pageProps} />
		</>,
	);
}

const NProgressStyles = createGlobalStyle`
  #nprogress {
    pointer-events: none;
  }

  #nprogress .bar {
    background: #FF6436; 
    position: fixed;
    z-index: 1031;
    top: 0;
    left: 0;
    width: 100%;
    height: 10px;
  }

  #nprogress .peg {
    display: block;
    position: absolute;
    right: 0px;
    width: 100px;
    height: 100%;
    box-shadow: 0 0 10px #FF6436, 0 0 5px #FF6436;
    opacity: 1;
    transform: rotate(3deg) translate(0px, -4px);
  }

  #nprogress .spinner {
    display: none; 
  }
`;
