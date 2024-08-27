import GlobalStyle from '@/styles/GlobalStyle';

export default function App({ Component, pageProps }) {
	const getLayout = Component.getLayout || (page => page);

	return getLayout(
		<>
			<GlobalStyle />
			<Component {...pageProps} />
		</>,
	);
}
