import '@/styles/globals.css'
import '@/styles/darkMode.css'
import { ThemeProvider } from '@/components/ThemeProvider'

export default function App({ Component, pageProps }) {

  return <ThemeProvider>
  <Component {...pageProps} />
  </ThemeProvider>
}
