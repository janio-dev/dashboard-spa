import '../styles/globals.css'
import { ThemeProvider } from '@mui/material/styles';
import theme from '../Hooks/theme';

function MyApp({ Component, pageProps }) {
  return  <ThemeProvider theme={theme}><Component {...pageProps} /></ThemeProvider>
}

export default MyApp
