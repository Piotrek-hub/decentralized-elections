import { NextUIProvider } from '@nextui-org/react';
import Nav from '../components/shared/Navbar';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: any) {
	return (
		<NextUIProvider>
			<Nav />
			<Component {...pageProps} />
		</NextUIProvider>
	);
}

export default MyApp;
